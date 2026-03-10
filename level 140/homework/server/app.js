// Libraries & Modules
const express = require('express');

// Routers
const authRouter = require('./routers/auth.router');
const roomRouter = require('./routers/rooms.router');
const bookingRouter = require('./routers/bookings.router');

const app = express();

// For parsing JSON into javascript object
app.use(express.json());

// Registering routers with starting paths
app.use('/api/auth', authRouter);
app.use('/api/room', roomRouter);
app.use('/api/booking', bookingRouter);

app.listen(3000, () => {
    console.log('Server is running at 3000 port!');
});