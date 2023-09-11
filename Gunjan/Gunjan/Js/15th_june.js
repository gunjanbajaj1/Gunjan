function ShortString(inp)
{
    let x=inp.length;
    
    let out=inp.slice(2) + "....."+ inp.slice(-2);
    console.log(out);
}
ShortString("North Indian,South Indian, Chinese");