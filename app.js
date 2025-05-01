// app.js
const express = require('express');
const morgan =require ('morgan')
// Import user router (from routes folder)
const userRouter = require('./routes/userRoute');
const logger = require('./utils/logger');
const app = express();
// app.use(morgan('dev'))
// the custom middleware to log the all request
app.use(logger)

// Mount the router
app.use('/users', userRouter); // this means all user routes start with /users

module.exports = app; // Export the app
