const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');

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

const app = express();

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

// Routers
app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);
app.use('/api/friend-requests', friendRequestRouter);
app.use('/api/friendships', friendshipRouter);

// Global Error handler
app.use(globalErrorHandler);

app.listen(3000, () => {
    console.log('Server is running at 3000!');
    connectDB();
});
