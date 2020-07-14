import React from 'react';
import keyboardLayout from '../images/60layout.svg';
import '../styling/keyboard.scss';
 
const Keyboard = ({ size }) => {

  return (
    <div className="keyboard">
      <div className="keyboard__title">
        <h2>The {size} keyboard</h2>
        <img className="keyboard__svg" src={keyboardLayout}></img>
      </div>
    </div>
  );
}
 
export default Keyboard