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
    <Keyboard 
      className="keyboard__svg"
      key={index}
      fill60={data.colors[index]._60}
      fill65={data.colors[index]._65} 
      fill75={data.colors[index]._75}
      fill80={data.colors[index]._80}
      fill100={data.colors[index]._100}
    />
  ));

  return (
    <Wrapper>
      <h1>{data.title}</h1>
      <div className="compare__legend">
        <div className="compare__gain">
          <div className="compare__gain-icon"></div>
          <h3>Keys gained</h3>
        </div>
        <div className="compare__lose">
          <div className="compare__lose-icon"></div>
          <h3>Keys lost</h3>
        </div>
      </div>
      {keyboardComponents[0]}
      <h1 style={{ marginTop:'1.45rem' }}>VS.</h1>
      {keyboardComponents[1]}
    </Wrapper>
  )
  
}
 
export default Compare