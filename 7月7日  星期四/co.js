//tj co

function output(cb){
    setTimeout(function () {
        cb(Math.random())
    },1000)
}



function* gen(){
    var v1=yield output();
    var v2=yield output();
} 
var iterator=gen();
var it=iterator.next();
it.value(function (val) {
    next(val)
})
console.log(it.next());
console.log(it.next());