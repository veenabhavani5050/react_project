// routes/user.js
const express = require('express');
const userController = require('../controller/userController');
const userRouter = express.Router();

// Define routes
userRouter.get("/",userController.getUsers)

// Export the router
module.exports = userRouter;
