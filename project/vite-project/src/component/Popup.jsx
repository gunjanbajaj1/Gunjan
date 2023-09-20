import React from "react";
import "./Popup.css"; 
export const Popup = ({ FirstName ,LastName,onValChange, closePopup,displayDetails }) => {
  return (
    <div className="popup-container">
     <div className="popup-body">
      <input type="text" name="FirstName" value={FirstName} onChange={(e) => onValChange(e)}/>
      <input type="text" name="LastName" value={LastName} onChange={(e) => onValChange(e)}/>
      <button onClick={displayDetails}>Submit</button>
      <button onClick={closePopup}>Cancel</button>
     </div>
    </div>
  );
};