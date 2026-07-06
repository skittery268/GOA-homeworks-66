require("dotenv").config();

const express = require("express");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const globalErrorHandler = require("./controllers/error.controller");
const connectDB = require("./configs/mongo.config");

const authRouter = require("./routers/auth.router");

const app = express();

require("./configs/passport.config");
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(passport.initialize());

app.use("/api/v1/auth", authRouter);

app.use(globalErrorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}!`);

    connectDB();
});