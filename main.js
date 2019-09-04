var express = require("express")
var app = express()
var path = require("path")

app.set('views','./dist');
app.set('view engine','html');
app.engine('html',require("ejs").renderFile);

app.use("/",function(req,res){
    console.log("app.use");
    res.render("main.html");

    //res.send('main.html');

})

app.listen(5000,function()
{
    console.log("listen");
})