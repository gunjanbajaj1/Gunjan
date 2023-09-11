/*
Step-1 create a function 
*/

function odd_pattern(n){
    for(let i=1;i<=n;i++){
        if(i%2 != 0){
            console.log("####");
        }
        else{
            console.log(i);
        }
    }
}
odd_pattern(5);