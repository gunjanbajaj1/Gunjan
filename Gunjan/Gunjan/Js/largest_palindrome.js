function largestPalindrome(str)
{
      arr=str.replace(/[^a-zA-Z ]/g, "").split(" ");
      for(let i=0;i<arr.length;i++)
      {
        if (arr[i] === "" || typeof (arr[i]) != "string" ) {
            return "Enter Valid String";
        } 
        else {
        let rev="";
        for(let j=(arr[i].length-1);j>=0;j--){
            rev+=str[j];
        }
        let a=(arr[i].toLowerCase());
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
      
}
console.log(largestPalindrome("Hello Madam. My name is bob"));