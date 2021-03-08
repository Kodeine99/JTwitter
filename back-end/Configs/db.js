const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    console.log("DB connection successfully");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = {connectDB};
