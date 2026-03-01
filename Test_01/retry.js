function retry(max_atmp){
     let attempt = 0
        let success = false
    do {
       attempt++
       console.log("Attempt :"+attempt)

     let res_time = Math.random()
    if(res_time > 0.6){
        let i =1
        console.log("✅ SUCCESS (Response 200 OK)")
        success = true
        break

    }
    else {console.log("❌ FAILED (Timeout/Error)")}
    }
    
while(!success && attempt<=5)
      console.log("completed at "+attempt)

    if (!success) {
        console.log("All attempts failed after " + max_atmp + " retries.");
    }
        

    

    
}
retry(5)