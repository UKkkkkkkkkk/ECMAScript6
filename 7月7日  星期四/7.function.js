function say(name,age=new Error("必须传")){
    console.log(name,age);
}
say('huhu',8);

var arr=[1,2,3];
function sum(a,b,c){
       return a+b+c
}
var he = sum.apply(null,arr)
console.log(he);
console.log(sum(...arr));//展开操作符


function rest(name,...hobby){
   // var hobby=[].slice.call(argument,1)
    console.log(name,hobby);
}

rest('huhu','eat','drink')


var output=function out(number){
    console.log(number--);
    if(number>0)
    output(number)
}
output(5)

//箭头函数

var sum=(a,b)=>a+b;
console.log(sum(3,5));


var person={
    name:'huhu',
    getName: function () {
        //箭头函数没有自己的this
        setTimeout(()=> {
            var age = 6
        },1000)
        setTimeout(()=>
            console.log(this.age)
        ,2000)
    }
}
person.getName()