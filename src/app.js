const express = require('express')
const app = express();

app.get("/user", (req, res) => {
    res.send({ firstName: "Queen", lastName: "Kaelix" });
});

app.post("/user", (req, res) => {
    console.log("Save Data to the Database");
    res.send("Data successfully saved to the Database!");
});

app.delete("/user", (req, res) => {
    console.log("Delete Data from the Database");
    res.send("Data successfully deleted from the Database!");
});

app.use("/Test", (req, res) => {
    res.send("Hello from the /Test endpoint!");
});

// app.use("/", (req, res) => {
//     res.send('Salaam Naz!');
// });

app.listen(3005, () => {
    console.log('Server is running on port 3005');
});