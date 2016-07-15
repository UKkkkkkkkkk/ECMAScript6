var l=console.log;

function* generator(arr){
    for(var i=0;i<arr.length;i++){
            yield arr[i];//生产
        }
}

var iterator=generator(['a','b','c']);
/*
l(iterator.next())
l(iterator.next())
l(iterator.next())
l(iterator.next())*/
do{
    var it=iterator.next();
    console.log(it.value);
}while(!it.done)