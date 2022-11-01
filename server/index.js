const express = require('express');
const conn = require('./config/db');
const app = express();
app.listen(5000, () => {
    console.log("Server is up and running on 5000 ...");
}) 