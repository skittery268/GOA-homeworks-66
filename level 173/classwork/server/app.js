const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const http = require('http');
const { Server } = require('socket.io');
const jwt = require('jsonwebtoken');

dotenv.config();

// Error handler
const globalErrorHandler = require('./controllers/error.controller');

// Routers
const authRouter = require('./routers/auth.router');
const postsRouter = require('./routers/post.router');
const friendRequestRouter = require('./routers/friendRequest.router');

// Configs
const connectDB = require('./config/mongo.config');
const friendshipRouter = require('./routers/friendship.router');
const userRouter = require('./routers/user.router');
const AppError = require('./utils/AppError');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:5173",
        credentials: true
    }
});

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(cookieParser());

// Helper middlewares
// To parse incoming JSON body
app.use(express.json());

// We use static method because we need to make our posts folder public.
// path: /filename
app.use(express.static(path.join(__dirname, "/images/posts")));

app.use((req, res, next) => {
    req.io = io;
    next();
})

io.use((socket, next) => {
    const token = socket.handshake.headers.cookie.split(";").map(c => c.trim()).find(c => c.startsWith("jwt="));

    if (!token) {
        return next(new AppError("You are not authorized to do this action!", 401));
    }

    const correctToken = token.split("=")[1];

    const payload = jwt.verify(correctToken, process.env.JWT_SECRET);

    if(!payload) {
        return next(new AppError("You are not authorized to do this action!", 401));
    }

    socket.userId = payload.id;

    next();
})

// Routers
app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);
app.use('/api/friend-requests', friendRequestRouter);
app.use('/api/friendships', friendshipRouter);
app.use('/api/users', userRouter);

// Global Error handler
app.use(globalErrorHandler);

io.on("connection", (socket) => {
    console.log("A user connected: " + socket.id);

    socket.join(socket.userId);

    socket.on("disconnect", () => {
        console.log("A user disconnected: " + socket.id);
    });
})

server.listen(3000, () => {
    console.log('Server is running at 3000!');
    connectDB();
});
