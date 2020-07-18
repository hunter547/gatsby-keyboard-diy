import React from 'react';
import '../styling/keyboard.scss';
 
const Keyboard = ({ size, Keyboard, data }) => {

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
      {Keyboard ? 
          <Keyboard className="keyboard__svg" />
        : 
          null
      }
    </div>
  );
}
 
export default Keyboard