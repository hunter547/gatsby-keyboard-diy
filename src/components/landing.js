import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStaticQuery, graphql } from "gatsby";
import '../styling/landing.scss';
import gsap from "gsap";
 
const Landing = () => {

  const data = useStaticQuery(graphql`
    query landing {
      landingJson {
        intro
      }
    }
  `)

  const [stab, setStab] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const intro = data.landingJson.intro;
  const sizes = ["60%", "65%", "75%", "80%", "100%"];

  useEffect(() => {
    let tl = gsap.timeline();
    tl.from('.landing__keyboard-grid-item', {
      y: 400,
      display: 'none',
      duration: 1,
      ease: 'back.out(5)',
      stagger: {
        amount: 1
      },
      delay: 0.1
    })
    .to('.landing__keyboard-grid-item', {
      y: 0,
      display: 'flex'
    })
  }, [])

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

  {/*if (!loaded) return <div>Loading...</div>*/}
  return (
    <div className="landing">
      <h2>{intro}</h2>
      <div className="landing__keyboard-grid">
        {sizes.map((size, index) => {
          return (
            <div className="landing__keyboard-grid-item" key={index}>
              <div className="landing__keyboard-grid-content">
                {size}
              </div>
            </div>
          )
        })} 
      </div>
    </div>
  );
}
 
export default Landing