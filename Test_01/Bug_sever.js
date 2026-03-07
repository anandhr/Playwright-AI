function setpri(fre,impact){
        
            if(impact==='blocker'){
                if(fre==='always'){console.log('Severity: P0 - Critical Stop release immediately')}
                else if(fre==='often'){console.log('Severity: P1 - Address before release happen')}
                else if(fre==='rarely'){console.log('Severity: P2 - Fix it before release if steps are there')}  
                else console.log('enter valid details')      
            }
            else 
                if(impact==='major'){
                   if(fre==='always'){console.log('Severity: P1 - Address before release happen')}
                   else if(fre==='often'){console.log('Severity: P2 - Address before release happen')}
                   else if(fre==='rarely'){console.log('Severity: P3 - Fix it before release if steps are there')}   
                   else console.log('enter valid details') 
                }
            else
                if(impact==='minor'){
                    if(fre==='always'){console.log('Severity: P2 - Address before release happen')}
                else if(fre==='often'){console.log('Severity: P3 - Address before next happen')}
                else if(fre==='rarely'){console.log('Severity: P4 - Fix it atlast')}
                else console.log('enter valid details')
                }
    }


function bug_sev(fre,impact,bug_title){

        console.log(`Bug Title :${bug_title}`)
        console.log(`Frequency : ${fre}`)
        console.log(`Impact : ${impact}`)
        if(impact !== 'blocker' && impact !== 'major' && impact !== 'minor'){
            return

        }
        
        setpri(fre,impact)
    
    
}

bug_sev('always','major','formating not applied')