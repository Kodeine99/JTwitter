const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Controller register
exports.register = async (req, res, next) => {
  try {
    // req.body -> name, email, password, ...
    const user = await User.create(req.body);

    // Sau khi crate thanh cong user thi tao token cho user do
    // Gom 2(3) tham so: user._id, appSecretKey, (ExpireDate)
    const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET);

    // Tra lai phan hoi ve client
    res.status(200).json({
      status: "success",
      data: { token, userName: user.name },
    });
  } catch (error) {
    // res.json({ error: error });
    next(error); // Day error qua errorHandler xu li
  }
};

// Controller login
exports.login = async (req, res, next) => {
  try {
    // Tim kiem trong db co email trung voi e mail nhap vao hay chua
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      // Error: Email is not correct
      const err = new Error("Email is not correct");
      err.statusCode = 400;
      return next(err);
    }
    // So sanh password nhap vao voi password luu trong DB
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign({ userId: user._id }, process.env.APP_SECRET);

      // Tra lai response ve client
      res.status(200).json({
        status: "success",
        data: { token, userName: user.name },
      });
    } else {
      // Error: password is not correct
      const err = new Error("Password is not correct");
      err.statusCode = 400;
      return next(err);
    }
  } catch (error) {
    res.jon(error);
  }
};

// Get Current User
exports.getCurrentUser = async (req, res, next) => {
  try {
    const data = { user: null };
    if (req.user) {
      const user = await User.findOne({ _id: req.user.userId });
      data.user = { userName: user.name };
    }
    res.status(200).json({
      status: "success",
      data: data,
    });
  } catch (error) {
    res.json({ error: error });
  }
};
