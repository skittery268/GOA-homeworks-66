const express = require('express');
const cors = require('cors');
const authRouter = require('./routers/auth.router');
const postRouter = require('./routers/post.router');

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);

app.listen(3000, () => {
    console.log('Server Started!');
});