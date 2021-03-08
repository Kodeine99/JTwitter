const express = require("express");
const { verifyToken } = require("../Middlewares/verifyToken");

const {
  getAllPosts,
  createOnePost,
  updateOnePost,
  deleteOnePost,
} = require("../Controllers/postController");
// Cac phuong thuc xu li post duoc lay tu Controller

const Router = express.Router();

Router.route("/").get(getAllPosts).post(verifyToken, createOnePost);

Router.route("/:postId")
  .put(verifyToken, updateOnePost)
  .delete(verifyToken, deleteOnePost);

module.exports = Router;
