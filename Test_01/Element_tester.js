function checkStates(isPresent, isDisplayed, isEnabled) {
        const isValid =
        typeof isPresent === "boolean" &&
        typeof isDisplayed === "boolean" &&
        typeof isEnabled === "boolean";

    if(!isValid){
        console.log('Enter correct state')
        return;
    }
    if(isPresent  && isDisplayed && isEnabled )
    {console.log("State :READY")
     console.log("Severity : OK (all good).")
    }
else if(isPresent  && !isDisplayed )
    {console.log("State :HIDDEN (present but not displayed)")
     console.log("Severity : WARNING (not displayed or not enabled)")
    }
    else if (isPresent && isDisplayed && !isEnabled) 
        {console.log("State : NOT FOUND (not present).")
     console.log("Severity :  CRITICAL (not present)")
    }
}


checkStates(true, false, 'true');