var http=require('http');
var fs =require('fs')

var server=http.createServer(function(req,res){
console.log(" "+ req.url)
if(req.url ==="/home" || req.url==="/"){
res.writeHead(200,{'Content-Type':'text/html'});
fs.createReadStream('home.html').pipe(res);
}
else if(req.url ==="/api"){
    res.writeHead(200,{'Content-Type':'application/json'})
    var obj={
        name:"karan",
        sirname:"bhosale"
    }
    
    res.end(JSON.stringify(obj));
}
else {
    res.writeHead(404,{'Content-Type':'text/html'})
    fs.createReadStream('error.html').pipe(res);
}
});
server.listen(3000,'127.0.0.1');