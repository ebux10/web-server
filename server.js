const express = require("express");
const hbs = require("hbs");
var port = process.env.PORT || 3000;

var app = express();
app.use(express.static(__dirname + "/public"))
app.set("view engine" , "hbs");
hbs.registerPartials(__dirname + "/views/partials")

app.get("/" , (req , res)=>{
    res.render("home.hbs",{
        welcomeMessage : "hello welcome home , pleae make yourself confortable"
    });
});

app.listen(port);