// app.js
const express = require('express');
const app = express();

// Import user router (from routes folder)
const userRouter = require('./routes/userRoute');

// Mount the router
app.use('/users', userRouter); // this means all user routes start with /users

module.exports = app; // Export the app
