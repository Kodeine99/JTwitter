const express = require("express");

// import controller
const {
  login,
  register,
  getCurrentUser,
} = require("../Controllers/authController");
const { checkCurrentUser } = require("../Middlewares/checkCurrentUser");

const Router = express.Router();

Router.route("/register").post(register);
Router.route("/login").post(login);
Router.route("/").get(checkCurrentUser, getCurrentUser);

module.exports = Router;
