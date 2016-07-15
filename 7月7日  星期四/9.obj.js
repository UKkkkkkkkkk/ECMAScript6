let name='huhu';
let age=8;
let say =()=>{console.log(this.name);}
let obj={
    name,age,say
}
console.log(obj);



var all={
    name:'huhu'
}

var a={
    age:'6'
}
var b={
    hobby:'drink'
}
Object.assign(all,a,b)
console.log(all);



var obj1={
    name:'zhi'
}
var obj2={};
var obj3={};

Object.setPrototypeOf(obj2,obj1)
console.log(obj2.name);
Object.getPrototypeOf(obj3,obj1)
console.log(obj1);