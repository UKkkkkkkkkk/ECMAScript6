/*
var arr=['huhu','8'];

var name,age;
name=arr[0];
age=arr[1];
console.log(name,age);
*/
/*

var arr=['huhu','8',['game','walk']];
let[name,age,[hobby]]=arr;
console.log(name,age,hobby);
*/


let obj={name:'huhu',age:'8'};
let{name,age}=obj;
console.log(name,age);


/*
function ajax(options){
    if(options.method){
        
    }else {
        options.method='get'
    }
}

ajax({
    url:'http://www.baidu.com'
})
*/


function ajax({method='get',url}){
    console.log(method,url);
}

ajax({
    url:'http://www.baidu.com',
    method:'post'
})