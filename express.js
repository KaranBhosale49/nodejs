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
    res.render('profile',{person: req.params.name});
})
app.listen(3000);