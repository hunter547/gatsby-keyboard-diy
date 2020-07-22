import React from 'react';
import Wrapper from '../components/wrapper';
 

function loadComponent(name) {
  const Component = React.lazy(() =>
    import(`../components/${name}.jsx`)
  );
  return Component;
}

const Compare = ({ location }) => {

  const componentFinder = [{size:'60%', component:'Sixty'},{size: '65%', component:'SixtyFive'},{size: '75%', component: 'Seventy'},{size: '80%', component: 'Eighty'},{size: '100%', component: 'Hundred'}];

  const keyboard1 = componentFinder.forEach( component => {
    if (component.size === location.state.size) {
      return component.component;
    }
  });

  console.log(keyboard1);

  return (
    <Wrapper>
      <h1>Comparing {location.state.size ? location.state.size : null} to a {location.state.keyboard}</h1>
    </Wrapper>
  )
  
}
 
export default Compare