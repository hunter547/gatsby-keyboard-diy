import React from 'react';
import Keyboard from '../../components/keyboard';
import Wrapper from '../../components/wrapper';
import keyboardSVG from '../../images/65layout.svg';
 
const SixtyFive = () => {
  return (
    <Wrapper>
      <Keyboard size="65%" svg={keyboardSVG} />
    </Wrapper>
  );
}
 
export default SixtyFive