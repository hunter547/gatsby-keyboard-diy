import React from 'react';
import '../styling/keyboard.scss';
 
const Keyboard = ({ size, svg, data }) => {

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
      {svg ? 
          <img className="keyboard__svg" src={svg}></img>
        : 
          null
      }
    </div>
  );
}
 
export default Keyboard