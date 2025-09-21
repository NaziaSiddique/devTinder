const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://kaelixkodes:v1pZmPxvu6XDq8Qu@learningnode.mtirazc.mongodb.net/"
  );
};

connectDB()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
