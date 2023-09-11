function palindrome(str)
{
    if (str === "" || typeof (str) != "string" ) {
        return "Enter Valid String";
    } 
    else {
    let rev="";
    for(let i=(str.length-1);i>=0;i--){
        rev+=str[i];
    }
    let a=(str.toLowerCase());
    let b=(rev.toLowerCase());
    if(a===b)
    {
        return "It is a palindrome";
    }
    else{
        return "It is a not palindrome";
    }
    
}
}
console.log(palindrome("Gunjan"));
console.log(palindrome("Madam"));
console.log(palindrome());