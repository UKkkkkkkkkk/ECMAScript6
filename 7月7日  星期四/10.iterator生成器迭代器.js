//生成器
function generator(arr){
    let index=0;
    return {
        next(){
            var value=arr[index++];
           // var done=index>arr.length?true:false;
            return{
                value,
                done:index>arr.length
            }
        }
    }
}
var iterator=generator(['java','node','js']);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

