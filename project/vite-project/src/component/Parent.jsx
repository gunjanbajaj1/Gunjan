import { useState } from "react";
import { Popup } from "./Popup";


const Parent = () => {
    const [open, setOpen] = useState(false); 
    const [details,setDetails]=useState({
        FirstName:"",
        LastName:""
    });

    const [Message,setMessage] =useState({
        display:'none'

    });
    const onValChange = (e) => {
        
        const { name, value } = e.target;
        setDetails({...details, [name] :value });
      };
      const displayDetails =(e) =>{
        setMessage({...Message , display:'block'}); 
        setOpen(false);
      }
  return (
    <>
    <div>
        <button onClick={() => setOpen(true)}>Click to enter details</button>
        {open ? <Popup FirstName={details.FirstName} LastName={details.LastName} onValChange={onValChange} displayDetails={displayDetails} closePopup={() => setOpen(false)} /> : null}
        <div style={Message}>
            <p>First Name: {details.FirstName}</p>
            <p>Last Name: {details.LastName}</p>
        </div>
   </div>
    </>  
  );
};

export default Parent;