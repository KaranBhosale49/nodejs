var mongoose = require('mongoose');
var UserSchema=new mongoose.Schema({
    username:String,
    useremail:String,
    usermobile:Number
})

module.exports= mongoose.model('user',UserSchema);