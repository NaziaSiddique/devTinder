const express = require("express");
const connectDB = require("./config/database");
const app = express();
const User = require("./models/user");

app.post("/signup", async (req, res) => {
  //Creating a new instance of the User model
  const user = new User({
    firstName: "Jane",
    lastName: "Doe'd",
    emailId: "janedoe@test.com",
    password: "password1234",
  });

  try {
      await user.save();
      res.send("User signed up and saved to database successfully!");
  } catch (err) {
    res.status(400).send("Error signing up user: " + err.message);
  }

});

connectDB()
  .then(() => {
    console.log("Database connection established");
    app.listen(3005, () => {
      console.log("Server is running on port 3005");
    });
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });
