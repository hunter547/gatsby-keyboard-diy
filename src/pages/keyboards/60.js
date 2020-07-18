import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Keyboard from '../../components/keyboard';
import Wrapper from '../../components/wrapper';
import keyboardSVG from '../../images/Sixty.jsx';
 
const Sixty = () => {

  const data = useStaticQuery(graphql`
    query sixty {
      sixtyJson {
        intro
      }
    }
  `)

  return (
    <Wrapper>
      <Keyboard size="60%" Keyboard={keyboardSVG} data={data.sixtyJson} />
    </Wrapper>
  );
}
 
export default Sixty