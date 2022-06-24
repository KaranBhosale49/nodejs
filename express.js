var express=require('express');
var bodyparser =require('body-parser')
var app = express();

var urlencodedparser = bodyparser.urlencoded({extended:false});

app.set('view engine','ejs');

app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
res.render('index')
});
app.get('/contact',(req,res)=>{
    res.render('contact',{qs:req.query})
})
app.post('/contact',urlencodedparser ,(req,res)=>{
    console.log(req.body);
    res.render('contact',{qs:req.query})
})
app.get('/profile/:name',function(req,res){
    var data ={age:24, job:'ninja',hobbies:['eating','fishing','running']};
    res.render('profile',{person: req.params.name,dat: data});
})
app.listen(3000);