require("dotenv").config();

//connect mongoDB
const { connectDB } = require("./Configs/db");
connectDB();

const express = require("express");
const cors = require("cors");

// Import Routes
const authRoute = require("./Routes/authRoute");
const postRoute = require("./Routes/postRoute");

// Import Error Handler
const { errorHandler } = require("./Middlewares/errorHandler");

const app = express();

// cors
app.use(cors());

// body-parser
app.use(express.json());

// Mount the router
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/posts", postRoute);

// Unhandled Route
app.all("*", (req, res, next) => {
  const err = new Error("The route can not be found");
  err.statusCode = 404;
  next(err);
});

// Error Handler
app.use(errorHandler);
const port = process.env.APP_PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
