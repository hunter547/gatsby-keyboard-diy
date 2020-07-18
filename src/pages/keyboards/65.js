import React from 'react';
import Keyboard from '../../components/keyboard';
import Wrapper from '../../components/wrapper';
import keyboardSVG from '../../images/SixtyFive.jsx';
 
const SixtyFive = () => {
  return (
    <Wrapper>
      <Keyboard size="65%" Keyboard={keyboardSVG} />
    </Wrapper>
  );
}
 
export default SixtyFive