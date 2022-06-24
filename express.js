var express=require('express');
var app = express();
app.set('view engine','ejs');

app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
res.render('index')
});
app.get('/contact',(req,res)=>{
    res.render('contact',{qs:req.query})
})
app.get('/profile/:name',function(req,res){
    var data ={age:24, job:'ninja',hobbies:['eating','fishing','running']};
    res.render('profile',{person: req.params.name,dat: data});
})
app.listen(3000);