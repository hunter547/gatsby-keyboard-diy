import React from 'react';
import Keyboard from '../../components/keyboard';
import Wrapper from '../../components/wrapper';
import keyboardSVG from '../../images/Eighty.jsx';
 
const Eighty = () => {
  return (
    <Wrapper>
      <Keyboard size="80%" Keyboard={keyboardSVG} />
    </Wrapper>
  );
}
 
export default Eighty