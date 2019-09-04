var express = require("express")
var app = express()
var path = require('path')
app.use(express.static(path.join(__dirname, 'dist')));
app.set('view engine','html')
app.set('views', __dirname + '/dist');
app.engine('html',require("ejs").renderFile);

app.get("/",function(req,res){
    console.log("app.use");
    res.render("main");

    //res.send('main.html');

})

app.listen(5000,function()
{
    console.log("listen");
})