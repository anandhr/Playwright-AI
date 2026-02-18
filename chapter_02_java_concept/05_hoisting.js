// Hoisting in Var
console.log(a); 
var a = 10;
console.log(a); 

// Hoisting in let
console.log(b); 
let b = 20;
console.log(b); 

function status_set() {
    let c = 30;
    console.log(c);
    if(true) {
        let d = 40;
        console.log(d);
    }
}

status_set()
