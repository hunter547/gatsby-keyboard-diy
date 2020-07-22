import React, { Suspense } from 'react';
import Wrapper from '../components/wrapper';
 

function loadComponent(name) {
  const Component = React.lazy(() =>
    import(`../images/${name}.jsx`)
  );
  return Component;
}

const Compare = ({ pageContext }) => {
  const data = pageContext.data;
  
  const Keyboard1 = loadComponent(data.keyboard1);
  const Keyboard2 = loadComponent(data.keyboard2);

  console.log(Keyboard1);

  return (
    <Wrapper>
      <h1>{data.title}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Keyboard1 />
        <Keyboard2 />
      </Suspense>
    </Wrapper>
  )
  
}
 
export default Compare