const express = require("express");
const app = express();
const { adminAuth, userAuth } = require("./middlewares/auth");

//Handle Auth Middleware for only GET requests, GET, POST, DELETE, PUT, PATCH
app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
    res.send("User Logged In Successfully!");
});

app.get("/user", userAuth, (req, res) => {
    res.send("User Data Sent!");    
});

app.get("/admin/getAllData", (req, res) => {
    console.log("Admin Auth is Successful!");
  res.send("All Data Sent!");
});

app.get("/admin/deleteUser", (req, res, next) => {
  res.send("User Deleted!!");
});

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
