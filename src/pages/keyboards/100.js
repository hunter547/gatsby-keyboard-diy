import React from 'react';
import Keyboard from '../../components/keyboard';
import Wrapper from '../../components/wrapper';
import keyboardSVG from '../../images/Hundred.jsx';
 
const Hundred = () => {
  return (
    <Wrapper>
      <Keyboard size="100%" Keyboard={keyboardSVG}/>
    </Wrapper>
  );
}
 
export default Hundred