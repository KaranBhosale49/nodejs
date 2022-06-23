var express=require('express');
var app = express();
app.set('view engine','ejs');
app.get('/',function(req,res){
res.send('this is by using app.get ');
});
app.get('/api',(req,res)=>{
    res.sendFile(__dirname+'/home.html');
})
app.get('/profile/:name',function(req,res){
    var data ={age:24, job:'ninja'};
    res.render('profile',{person: req.params.name,data: data});
})
app.listen(3000);