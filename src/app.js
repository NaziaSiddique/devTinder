const express = require('express')
const app = express();

app.use((req, res) => {
    res.send('Hello, from the express server!');
});

app.listen(3005, () => {
    console.log('Server is running on port 3005');
});