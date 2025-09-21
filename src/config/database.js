const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kaelixkodes:v1pZmPxvu6XDq8Qu@learningnode.mtirazc.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
