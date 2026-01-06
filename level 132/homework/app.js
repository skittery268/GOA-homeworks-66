const express = require('express');
const morgan = require('morgan');
const usersRouter = require('./routers/user.router.js');

const app = express();

app.use(morgan('dev'));

app.use("/users", usersRouter);

app.listen(3000, () => {
    console.log("Server Started!");
});
