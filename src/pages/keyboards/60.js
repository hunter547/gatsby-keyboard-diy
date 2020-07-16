import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import Keyboard from '../../components/keyboard';
import Wrapper from '../../components/wrapper';
import keyboardSVG from '../../images/60layout.svg';
 
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
      <Keyboard size="60%" svg={keyboardSVG} data={data.sixtyJson} />
    </Wrapper>
  );
}
 
export default Sixty