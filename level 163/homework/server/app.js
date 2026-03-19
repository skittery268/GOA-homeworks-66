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

// Configs
const connectDB = require('./config/mongo.config');

const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(cookieParser());

// Helper middlewares
// To parse incoming JSON body
app.use(express.json());

// We use static middleware to make uploads publicly accessible.
app.use('/images/posts', express.static(path.join(__dirname, '/images/posts')));
app.use('/images/profiles', express.static(path.join(__dirname, '/images/profiles')));

// Routers
app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);

// Global Error handler
app.use(globalErrorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server is running at ${process.env.PORT}!`);
    connectDB();
});


