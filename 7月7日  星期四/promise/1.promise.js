//初始态  pending
//resolve 是一个函数，如果你这个任务成功了，则调用resolve 方法


var promise = new Promise(function (resolve,reject) {
    setTimeout(function () {
        var n=Math.random()
        if(n>0.5) {
            resolve('成功'+n)
        }else{
            reject('失败'+n)
        }
    },3000)
});

//第一个是成功的回调，第二个是失败的回调；
promise.then(function(data){
     console.log(data);
}, function (reason) {
    console.log(reason);
})