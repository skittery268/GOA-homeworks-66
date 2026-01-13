const express = require('express');
const cors = require('cors');
const authRouter = require('./routers/auth.router');
const { readFile } = require('./utils/file');

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use("/api/auth", authRouter);

app.listen(3000, () => {
    console.log('Server Started!');
});