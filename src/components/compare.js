import React, { useState, useEffect } from 'react';
import Wrapper from '../components/wrapper';
import '../styling/compare.scss';
 

const Compare = ({ pageContext }) => {

  const addComponent = async name => {
    import(`../images/${name}.jsx`)
      .then( component => {
        setComponents( array => array.concat(component.default));
      })
      .catch( error => {
        console.log(error)
      })
  }

  const data = pageContext.data;
  
  const [components, setComponents] = useState([]);

  useEffect(() => {
    addComponent(data.keyboard1);
    addComponent(data.keyboard2);
  }, [])

  if (components.length !== 2) return <div>Loading...</div>;

  const keyboardComponents = components.map((Keyboard, index) => (
    <Keyboard className="keyboard__svg" key={index} />
  ));

  return (
    <Wrapper>
      <h1>{data.title}</h1>
      {keyboardComponents[0]}
      <h1 style={{ marginTop:'1.45rem' }}>VS.</h1>
      {keyboardComponents[1]}
    </Wrapper>
  )
  
}
 
export default Compare