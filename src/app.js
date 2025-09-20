const express = require("express");
const app = express();

app.get("/admin/getAllData", (req, res) => {
  //Logic checking if the request is authorised
//   const token = "ABC"; For unauthorised request
  const token = "xyz"; // For authorised request

  const isAdminAuthorised = token === "xyz";
  if (isAdminAuthorised) {
    res.send("All Data Sent!");
  }
  else {
    res.status("401").send("Unauthorised Request!");
  }
});

app.get("/admin/deleteUser", (req, res, next) => {
  //Logic of deleting a user
  res.send("User Deleted!!");
});

app.listen(3005, () => {
  console.log("Server is running on port 3005");
});
