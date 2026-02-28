let a = ["pass", "pass", "fail", "pass", "skip", "pass", "fail", "pass"]
res_len = a.length

let pass_count =0
let fail_count =0
let skip_count =0
for (let i=0;i<res_len;i++){
    if(a[i]==="pass"){
        pass_count +=1
    }
    else if(a[i]==="fail"){fail_count +=1 }
    else if(a[i]==="skip"){skip_count +=1 }

}
let Pass_Rate = (pass_count /res_len) 
let Pass_per = Pass_Rate * 100

console.log("Pass:", pass_count);
console.log("Fail:", fail_count);
console.log("Skip:", skip_count);
console.log("Total:", pass_count + fail_count + skip_count);
console.log("Pass Rate:", Pass_per+"%");
if(pass_count === res_len){
    console.log("Verdict = ready for release")
}
else if(fail_count <=2){console.log("Verdict = Minor failures. Review before release")}
else {console.log("Verdict = Block release")}