const express = require("express");

const app = express();

app.use("/", (err, req, res, next) => {
  if (err) {
    // Log error message
    console.error(err.message);
    res.status(500).send("Some error occurred at server - Wildcard");
  }
});

app.get("/getUserData", (req, res) => {
  try {
    // Logic of DB call and get user data
    throw new Error("DB connection failed");
    res.send("User Data Sent!");
  } catch (err) {
    res.status(500).send("Some error occurred at server - try-catch");
  }
});

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
