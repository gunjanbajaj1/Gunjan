const reverseString = (str) => {
    let arr=str.split("");
    let len=arr.length;
    let result="";
    for(let i=0;i<arr.length-1;i++)
    {
        resu
    }

    const iterateNumer = (i) => {
      //console.log(i);
      if (i <= len) {
        let arr1=arr.split("");
        arr[i]+=arr1[0].toUpper;
        i;
        iterateNumer(i);
      }
    };
  
    iterateNumer(0);
    console.log(result);
  };

  reverseString("my name is");