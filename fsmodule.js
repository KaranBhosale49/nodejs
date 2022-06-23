var fs = require('fs')

var re=fs.readFileSync('readme.txt','utf-8');
fs.writeFileSync('writing.txt',re);
console.log(re);