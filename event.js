var events =require('events')

var util=require('util')
//constructor of Person
var Person=function(name){
    this.name=name;
}

//util.inherite allows person to inherite events modules eventemitter
util.inherits(Person,events.EventEmitter);

//creating objects of person
var karan = new Person("karan");
var pranav =new Person("pranav");
var prajwal =new Person("prajwal");

//array of people
var people=[karan,pranav,prajwal];

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name+" said : "+msg)
    })
})
karan.emit('speak',"hey dudes");