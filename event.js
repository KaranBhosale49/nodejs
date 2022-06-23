var events =require('events')

var util=require('util')

var Person=function(name){
    this.name=name;
}
util.inherits(Person,events.EventEmitter);
var karan = new Person("karan");
var pranav =new Person("pranav");
var prajwal =new Person("prajwal");

var people=[karan,pranav,prajwal];
people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name+" said : "+msg)
    })
})
karan.emit('speak',"hey dudes");