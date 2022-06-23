var http=require('http');
var fs =require('fs')

var server=http.createServer(function(req,res){
console.log(" "+ req.url)
res.writeHead(200,{'Content-Type':'text/html'});
var myreadable=fs.createReadStream('home.html','utf-8');
myreadable.pipe(res)
});
server.listen(3000,'127.0.0.1');