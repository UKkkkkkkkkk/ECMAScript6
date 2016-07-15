var fs=require("fs")
function readFile(){
    return new Promise(function () {
        fs.readFile(filename,'utf8', function (err,data) {
            if(err){
                reject()
            }
        })
    })
}