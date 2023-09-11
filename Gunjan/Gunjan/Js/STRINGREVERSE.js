function reverseString(str)
{
    if (str === "" || typeof (str) != "string" ) {
        return "Enter Valid String";
      } 
    else {
    let rev="";
    for(let i=(str.length-1);i>=0;i--){
        rev+=str[i];
    }
    return rev;
}
}
console.log(reverseString("Gunjan bajaj"));
console.log(reverseString(123));
console.log(reverseString());