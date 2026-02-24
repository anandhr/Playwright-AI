function triClassifier(a,b,c){
    if (!(a + b > c && a + c > b && b + c > a) || (a <= 0 || b <= 0 || c <= 0)) {
    return "Not a valid triangle"}
    else if((a===b) &&(b===c) ){
        return "it is equilateral triangle"
   }
   else if (a === b || a === c || b === c){return "it is isosceles triangle"}
   else
   {return "it is Scalence triangle"}


  



}
console.log(triClassifier(10,12,16))
console.log(triClassifier(10,10,19))
console.log(triClassifier(10,10,10))
console.log(triClassifier(-2,10,10))
