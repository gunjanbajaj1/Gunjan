import { useState } from 'react'

function CounterTen() {
  const [count, setCount] = useState(10);
  const [disabled, setDisabled] = useState(false);

    const handleIncrement = (e) => {
        setCount(count + 2);
        if(count==100)
        {
            setDisabled(true);
        }
    
    }
    const handleDecrement = (e) => {
        setCount(count- 2);
        if(count==0)
        {
            setDisabled(true);
        }
    
    }


  return (
    <>
      <div>
        Count ={count};
      </div>
      <button onClick={(e) => handleIncrement(e)} disabled={disabled}> Increment</button>
      <button onClick={ (e) => handleDecrement (e)} disabled={disabled}>Decrement</button>
    </>
  )
}

export default CounterTen