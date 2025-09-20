const express = require('express')
const app = express();

app.use(
    "/user",[
    (req, res, next) => {
        console.log("Handle the route user!!");
        // res.send("First Response!!");
        next();
    },
    (req, res, next) => {
        console.log("Second callback!!");
        // res.send("Response from second callback!!");
        next();
    },
     (req, res, next) => {
        console.log("Third callback!!");
        // res.send("Response from third callback!!");
        next();
    },
     (req, res, next) => {
        console.log("Fourth callback!!");
        // res.send("Response from fourth callback!!");
        next();
    },
     (req, res) => {
        console.log("Fifth callback!!");
        res.send("Response from fifth callback!!");
    }]
);

app.listen(3005, () => {
    console.log('Server is running on port 3005');
});