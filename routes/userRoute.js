const express = require("express");

const {Register ,LoginUser} = require("../controller/userController")

const UserRouter = express.Router()


// for registeration of a new user
UserRouter.post("/register", Register);

// for login  user
UserRouter.post("/signin", LoginUser);


module.exports = {UserRouter};