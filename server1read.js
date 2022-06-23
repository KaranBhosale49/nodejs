var http = require('http');
var fs = require('fs');

var server= http.createServer(function(req,res){
    var readstream = fs.createReadStream('read.txt','utf-8');
    readstream.pipe(res);
});

server.listen(3000,'127.0.0.1');
console.log('running on port 3000');