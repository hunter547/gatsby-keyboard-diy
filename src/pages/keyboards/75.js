import React from 'react';
import Keyboard from '../../components/keyboard';
import Wrapper from '../../components/wrapper';
import keyboardSVG from '../../images/SeventyFive.jsx'
 
const SeventyFive = () => {
  return (
    <Wrapper>
      <Keyboard size="75%" Keyboard={keyboardSVG} />
    </Wrapper>
  );
}
 
export default SeventyFive