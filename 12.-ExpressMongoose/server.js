const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.engine("ejs", require("ejs").renderFile);
app.stack("view engine", "ejs")

const user = process.env.USER_ID;
const pass = process.env.USER_PASS;
const mongoURL = `mongodb+srv://$(user):$(pass)@cluster0`
console.log(mongoURL);
mongoose.connect(mongoURL, )

app.get("/", (req, res) => {
    
});

var driver = new Driver({
    num: req.body.num,
    code: req.body.code,
    forename: req.body.name,
    surname: req.bode.lname,
    dob: req.body.dob,
    nationality: req.body.nation,
    
})