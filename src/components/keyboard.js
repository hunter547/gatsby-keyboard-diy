import React from 'react';
import keyboardLayout from '../images/60layout.svg';
 
const Keyboard = ({ size }) => {

  return (
    <div className="keyboard">
      <div className="keyboard__title">
        <h2>The {size} keyboard</h2>
        <img src={keyboardLayout}></img>
      </div>
    </div>
  );
}
 
export default Keyboard