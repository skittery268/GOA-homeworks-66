const { Server } = require("socket.io");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");
const Group = require("../models/group.model");
const parseCookies = require("../utils/parseCookies");

const CLIENT_URL = process.env.CLIENT_URL || "http://localhost:5173";
const TYPING_TIMEOUT = 4000;

let io = null;

// userId -> { name, sockets: Set<socketId> }
const onlineUsers = new Map();
// groupId -> Map<userId, { name, timeout }>
const typingUsers = new Map();

const getUserRooms = (socket) => {
    return [...socket.rooms].filter((room) => room !== socket.id);
}

const getGroupOnlineUsers = (groupId) => {
    const room = io.sockets.adapter.rooms.get(groupId);

    if (!room) return [];

    const users = new Map();

    room.forEach((socketId) => {
        const memberSocket = io.sockets.sockets.get(socketId);

        if (!memberSocket?.data?.user) return;

        users.set(memberSocket.data.user.id, memberSocket.data.user);
    });

    return [...users.values()];
}

const emitGroupPresence = (groupId) => {
    io.to(groupId).emit("groupUsers", {
        groupId,
        users: getGroupOnlineUsers(groupId)
    });
}

const emitTyping = (groupId) => {
    const group = typingUsers.get(groupId);
    const users = group ? [...group.entries()].map(([id, value]) => ({ id, name: value.name })) : [];

    io.to(groupId).emit("typing", { groupId, users });
}

const stopTyping = (groupId, userId) => {
    const group = typingUsers.get(groupId);

    if (!group?.has(userId)) return;

    clearTimeout(group.get(userId).timeout);
    group.delete(userId);

    if (!group.size) typingUsers.delete(groupId);

    emitTyping(groupId);
}

const startTyping = (groupId, user) => {
    if (!typingUsers.has(groupId)) {
        typingUsers.set(groupId, new Map());
    }

    const group = typingUsers.get(groupId);
    const existing = group.get(user.id);

    if (existing) clearTimeout(existing.timeout);

    group.set(user.id, {
        name: user.name,
        timeout: setTimeout(() => stopTyping(groupId, user.id), TYPING_TIMEOUT)
    });

    // A brand new typing user changes the list, a refreshed timer does not.
    if (!existing) emitTyping(groupId);
}

// Only authenticated users may open a socket, otherwise anybody could listen
// to any group room just by knowing its id.
const authenticateSocket = async (socket, next) => {
    try {
        const { authToken } = parseCookies(socket.handshake.headers.cookie);

        if (!authToken) {
            return next(new Error("Unauthorized!"));
        }

        const payload = jwt.verify(authToken, process.env.JWT_SECRET);
        const user = await User.findById(payload.id).select("name email");

        if (!user) {
            return next(new Error("Unauthorized!"));
        }

        socket.data.user = {
            id: user._id.toString(),
            name: user.name,
            email: user.email
        };

        next();
    } catch {
        next(new Error("Unauthorized!"));
    }
}

const registerHandlers = (socket) => {
    const user = socket.data.user;

    socket.join(`user:${user.id}`);

    socket.on("joinGroup", async (groupId, callback) => {
        try {
            if (!groupId) return;

            const room = groupId.toString();
            const group = await Group.findOne({ _id: room, members: user.id }).select("_id");

            if (!group) {
                socket.emit("socketError", { message: "You are not a member of this group!" });
                callback?.({ status: "fail" });
                return;
            }

            socket.join(room);
            emitGroupPresence(room);
            emitTyping(room);
            callback?.({ status: "success" });
        } catch {
            socket.emit("socketError", { message: "Could not join the group chat!" });
            callback?.({ status: "error" });
        }
    })

    socket.on("leaveGroup", (groupId) => {
        if (!groupId) return;

        const room = groupId.toString();

        socket.leave(room);
        stopTyping(room, user.id);
        emitGroupPresence(room);
    })

    socket.on("typing:start", (groupId) => {
        if (!groupId || !socket.rooms.has(groupId.toString())) return;

        startTyping(groupId.toString(), user);
    })

    socket.on("typing:stop", (groupId) => {
        if (!groupId) return;

        stopTyping(groupId.toString(), user.id);
    })

    socket.on("disconnecting", () => {
        const rooms = getUserRooms(socket);

        rooms.forEach((room) => stopTyping(room, user.id));

        // Presence has to be recalculated once this socket is really gone.
        process.nextTick(() => rooms.forEach((room) => emitGroupPresence(room)));
    })

    socket.on("disconnect", () => {
        const online = onlineUsers.get(user.id);

        if (!online) return;

        online.sockets.delete(socket.id);

        if (!online.sockets.size) {
            onlineUsers.delete(user.id);
            io.emit("userOffline", { id: user.id, name: user.name });
        }
    })
}

const initSocket = (server) => {
    io = new Server(server, {
        cors: {
            origin: CLIENT_URL,
            credentials: true
        }
    })

    io.use(authenticateSocket);

    io.on("connection", (socket) => {
        const user = socket.data.user;

        if (!onlineUsers.has(user.id)) {
            onlineUsers.set(user.id, { name: user.name, sockets: new Set() });
            io.emit("userOnline", { id: user.id, name: user.name });
        }

        onlineUsers.get(user.id).sockets.add(socket.id);

        socket.emit("onlineUsers", [...onlineUsers.entries()].map(([id, value]) => ({ id, name: value.name })));

        registerHandlers(socket);
    })

    return io;
}

const getIO = () => {
    if (!io) throw new Error("Socket.io is not initialized yet!");

    return io;
}

module.exports = { initSocket, getIO, stopTyping };
