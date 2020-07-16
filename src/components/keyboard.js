import React from 'react';
import '../styling/keyboard.scss';
 
const Keyboard = ({ size, svg, data }) => {

  return (
    <div className="keyboard">
      <div className="keyboard__title">
        <h1>The {size} keyboard</h1>
      </div>
      {svg ? 
          <img className="keyboard__svg" src={svg}></img>
        : 
          null
      }
      <div className="keyboard__intro">
        {data.intro ? 
          <h3>{data.intro}</h3>
        :
          null
        }
      </div>
    </div>
  );
}
 
export default Keyboard