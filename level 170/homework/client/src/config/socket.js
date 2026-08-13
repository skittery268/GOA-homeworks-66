import { io } from "socket.io-client";

const URL = import.meta.env.VITE_SERVER_URL || "http://localhost:3000";

// The server rejects unauthenticated sockets, so we only connect once we
// know there is a logged in user.
export const socket = io(URL, {
	withCredentials: true,
	autoConnect: false
});

export const connectSocket = () => {
	if (!socket.connected) socket.connect();
}

export const disconnectSocket = () => {
	if (socket.connected) socket.disconnect();
}
