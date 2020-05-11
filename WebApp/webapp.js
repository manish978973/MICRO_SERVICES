const express = require("express");
const path = require("path");
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile('views/index.html', {root: __dirname })
});

app.get("/customers", (req, res) => {
    res.sendFile('views/userview.html', {root: __dirname })
});

app.get("/newuser", (req, res) => {
    res.sendFile('views/newuser.html', {root: __dirname })
});

app.get("/books", (req, res) => {
    res.sendFile('views/bookview.html', {root: __dirname })
});

app.get("/orders", (req, res) => {
    res.sendFile('views/orderview.html', {root: __dirname })
});

app.get("/newbook", (req, res) => {
    res.sendFile('views/newbook.html', {root: __dirname })
});

app.get("/neworder", (req, res) => {
    res.sendFile('views/neworder.html', {root: __dirname })
});






app.listen(3000, () => {    
    console.log("Webapplication running on port 3000");
    console.log("--------------------------");
  });