import React from 'react';
import '../styling/keyboard.scss';
import { Link } from "gatsby";
 
const Keyboard = ({ size, Keyboard, data }) => {

  const sizes = ['60%','65%','75%','80%','100%'];

  sizes.forEach((keyboard, index) => {
    if (keyboard === size) {
      sizes.splice(index, 1)
    }
  })

  return (
    <div className="keyboard">
      <div className="keyboard__title">
        <h1>The {size} keyboard</h1>
      </div>
      <div className="keyboard__intro">
        {data ? 
          <h3>{data.intro}</h3>
        :
          null
        }
      </div>
      <Keyboard className="keyboard__svg" />
      {sizes.map((keyboard, index) => {
        return (
          <Link to="/compare" key={index} state={{ size, keyboard }}>
            <button style={{marginTop: '2rem'}}>Compare with {keyboard}</button>
          </Link>
        )
      })}
    </div>
  );
}
 
export default Keyboard