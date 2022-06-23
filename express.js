var express=require('express');
var app = express();
app.get('/',function(req,res){
res.send('this is by using app.get ');
});

app.get('/contact',function(req,res){
    res.send("this is contact page");
})
app.listen(3000);