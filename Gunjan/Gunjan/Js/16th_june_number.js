function number_pattern(n){
    for(let i=1;i<=n;i++){
        if(i%2 != 0){
            console.log(`${i}${i}${i}${i}`);
        }
        else{
            console.log(`${i}`);
        }
    }
}
number_pattern(10);