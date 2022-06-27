var express=require('express');
var app=express();

var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost/Node');

var User=require('./User.model');
app.set('view engine','ejs');


app.get('/',function(req,res){
    res.render('home');
})

app.get('/add', function(req, res,next) {
    res.render('add-form');
});


app.post('/add', function(req, res,next) {
    console.log(req.body);

    const mybodydata = {
        username: req.body.username,
        useremail: req.body.useremail,
        usermobile: req.body.usermobile
    }
    var data = User(mybodydata);
    data.save(function(err) {
        if (err) {
            res.render('add-form', { message: 'User registered not successfully!' });
        } else {
            res.render('add-form', { message: 'User registered successfully!' });
        }
    })
});





















app.listen(8080,function(){
    console.log('running on port 8080');
})