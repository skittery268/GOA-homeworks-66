const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

// Error handler
const globalErrorHandler = require('./controllers/error.controller');

// Routers
const authRouter = require('./routers/auth.router');
const postsRouter = require('./routers/post.router');

// Configs
const connectDB = require('./config/mongo.config');

const app = express();

// Helper middlewares
// To parse incoming JSON body
app.use(express.json());

// Routers
app.use('/api/auth', authRouter);
app.use('/api/posts', postsRouter);

// Global Error handler
app.use(globalErrorHandler);

app.listen(process.env.PORT, () => {
    console.log('Server is running at 3000!');
    connectDB();
});
