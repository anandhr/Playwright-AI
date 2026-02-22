function pintnumber(){
    for (let i =1;i<=100;i++){
        if(i%3 == 0 && i%5==0){
            console.log('FizzBuzz')
        }
        else if(i%5 ==0){
          console.log('Buzz')
        }
        else if(i%3 ==0){
            console.log('Fizz')
        }
        else{
            console.log(i)
        }
        
    }
}
pintnumber()


function gradeCheck(grd){
   if(grd >= 90 && grd <=100){
    console.log('Grade A')}
    else if(grd >= 80 && grd <=89){ console.log('Grade B')}
    else if(grd >= 70 && grd <=79){ console.log('Grade C')}
    else if(grd >= 60 && grd <=69){ console.log('Grade D')}
    else if( grd <=59){ console.log('Grade F')}
}
gradeCheck(85)
gradeCheck(16)
gradeCheck(76)