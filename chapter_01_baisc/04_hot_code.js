var a = 10
console.log(a)

function add(a,b){
    return a + b
}
let result
for(i =0 ; i < 1000000; i++){
    result=add(i, i+1)
}
console.log("print answer for 1000000", result)