const reverseString = (str) => {
    let len=str.length;
    let result="";
    const iterateNumer = (i) => {
      //console.log(i);
      if (i !== 0) {
       result+=str[i-1];
        i--;
        iterateNumer(i);
      }
    };
  
    iterateNumer(len);
    console.log(result);
  };

  reverseString("Gunjan");