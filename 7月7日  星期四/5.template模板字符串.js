let name='huhu';
let age='8';
function desc(strings,...values){
    console.log(strings,values);
    var str='';
    for(var i=0;i<values.length;i++){
            str+=(strings[i].toUpperCase()+values[i].toUpperCase())
        }
    str+=strings[i].toUpperCase()
    return str;
}

let word=desc`${name} is ${age}years old!`
console.log(word);