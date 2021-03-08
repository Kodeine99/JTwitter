const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Name must be required"],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Email must be required"],
    },
    password: {
      type: String,
      unique: true,
      trim: true,
      required: [true, "Password must be required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
  },
  { timestamps: true }
);

userSchema.pre("save", function (next) {
  // Truoc khi save thi lay user vua tao trong mongoDB
  let user = this;
  // Ma hoa password -> hashed password
  bcrypt.hash(user.password, 10, (error, hash) => {
    if (error) {
      return next(error);
    } else {
      console.log("2");
      user.password = hash; // luu hashed password tro lai user
      next(); // luu user vao trong mongoDB
    }
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
