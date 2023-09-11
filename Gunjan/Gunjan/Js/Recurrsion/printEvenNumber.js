const printEvenNumber = (num) => {
    const iterateNumer = (i) => {
      //console.log(i);
      if (i !== 0) {
        if(i%2==0)
        {
            console.log(i);
        }
        num--;
        iterateNumer(num);
      }
    };
  
    iterateNumer(num);
  };

  printEvenNumber(10);