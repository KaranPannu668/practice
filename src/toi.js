const express = require("express");
const bodyParser = require("body-parser");
const app = express();
require("./db/conn");
const contact = require("./models/contact");
const hbs = require('hbs');
const path = require("path");


app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req,res) => {
    res.render("index");
})




















const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`The server is live on ${port}`);
})