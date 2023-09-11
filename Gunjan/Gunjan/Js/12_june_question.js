function runLoop (a){
    let x=Number(a);
    if(isNaN(x)==true)
    {
        return "Enter Valid Number";
    }
    for(let i=1;i<=x;i++)
    {
        console.log(i);
    }

}
function runRevLoop (a){
    let x=Number(a);
    if(isNaN(x)==true)
    {
        return "Enter Valid Number";
    }
    for(let i=x;i>=1;i--)
    {
        console.log(i);
    }

}

runLoop("abc");
runRevLoop("10");
