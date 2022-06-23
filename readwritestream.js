var http = require('http');
var fs = require('fs');


//creatReadStream is a function from file system it is inheritade from event has .on method
var myReadStream = fs.createReadStream('read.txt','utf8');
var mywritestream =fs.createWriteStream('wr.txt');

myReadStream.on('data',function(chunk){
    console.log('new chunk received');
    mywritestream.write(chunk);
});
