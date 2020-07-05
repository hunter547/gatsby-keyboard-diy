import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
const Landing = () => {
  const [stab, setStab] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getStabs();
  });

  const getStabs = () => {
    axios.get('https://keyboard-diy.herokuapp.com/stabs')
    .then(response => {
      setStab(response.data[0].descr);
      setLoaded(true);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  if (!loaded) return <div>Loading...</div>
  return (
    <h1>{stab}</h1>
  );
}
 
export default Landing