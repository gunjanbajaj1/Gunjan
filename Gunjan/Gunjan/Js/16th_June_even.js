/*
Step-1 create a function that will take how many lines will be there
Step-2 create a loop that will create rows from 1 till the input given by user
Step-3 Inside the loop there will conditional statement to check row number is odd then print 
row number threetimes otherwise print "*"
*/

function even_pattern(n){
    for(let i=1;i<=n;i++){
        if(i%2 == 0){
            console.log(`${i}${i}${i}`);
        }
        else{
            console.log("*");
        }
    }
}
even_pattern(5);