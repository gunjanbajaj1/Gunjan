import { useState } from 'react'

function MagicMessage() {
  const [color, setcolor] = useState(
    {
      red:false,
      green:false,
      purple:false,
      pink:false
    }
  );
  const handleCheck =(e) =>{
    const { checked, name } = e.target;
    setcolor({ ...color, [name]: checked });
  }
 console.log(color);

  return (
    <>
      <div>
       <input type="checkbox" name="red" checked={color.red} onChange={(e) => handleCheck(e)}/><label>Red</label>
       <input type="checkbox" name="green" checked={color.green} onChange={(e) => handleCheck(e)}/><label>Green</label>
       <input type="checkbox" name="purple" checked={color.purple} onChange={(e) => handleCheck(e)}/><label>Purple</label>
       <input type="checkbox"name="pink" checked={color.pink} onChange={(e) => handleCheck(e)}/><label>Pink</label>
       <div>Magic Meessage</div>
       <div>You have selected : <textarea value={color}></textarea></div>
      </div>
    </>
  )
}

export default MagicMessage