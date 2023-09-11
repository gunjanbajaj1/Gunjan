function occCheck(arr){
    out={};
    for (let i=0;i<arr.length;i++)
    {
        key = arr[i].toLowerCase();
        if(out.hasOwnProperty(key)===false)
        {
            out[key]=1;
        }   
        else{
            
            out[key]=out[key] + 1;
        }

    }
    return out;

}
console.log(occCheck([
    "ankit",
    "chirag",
    "mitesh",
    "mahesh",
    "ankit",
    "sanket",
    "Sanket",
  ]));