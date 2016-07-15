function sum(){
    //var arr=[].slice.call(arguments);

    //return arr.reduce(function (curr,next) {
    //    return curr + next;
    //},0);
    let arr =Array.from(arguments)
    return  arr.reduce((curr,next)=>curr + next)
}
console.log(sum(1,2,3));

console.log(Array(1,2,3,4,5).length);
console.log(Array(3));
console.log(Array.of(3));

//用456覆盖123；
console.log([1,2,3,4,5,6].copyWithin(0,3,6));//包前不包后

var arr=[1,2,3,4,5,6,7,8,9,2,3,4];
console.log(arr.find((item,index)=>item==2));
console.log(arr.findIndex((item,index)=>item==2));


var arr=[,,,,,,];
arr.fill('a',0,3);
arr.fill('b',3,6);
console.log(arr);

