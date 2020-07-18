import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useStaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import '../styling/landing.scss';
import gsap from "gsap";
import { connect } from "react-redux";

const introAnimation = (firstLoad) => {
  let tl = gsap.timeline();
  tl.from('.landing__keyboard-grid-item', {
    y: 300,
    display: 'none',
    duration: 1,
    ease: 'back.out(4.2)',
    stagger: {
      amount: 0.5
    },
    delay: 0.1
  })
  .to('.landing__keyboard-grid-item', {
    y: 0,
    display: 'flex',
    onStart: firstLoad
  })
}
 
const Landing = ({ load, increment }) => {

  const data = useStaticQuery(graphql`
    query landing {
      landingJson {
        intro
      }
    }
  `)

  const intro = data.landingJson.intro;
  const sizes = ["60%", "65%", "75%", "80%", "100%"];

  const firstLoad = () => {
    increment();
  }

  useEffect(() => {
    gsap.to('.landing__keyboard-grid', {
      display: 'grid'
    })
    if (load === 0) {
      introAnimation(firstLoad);
    }
  }, []);

  return (
    <div className="landing">
      <h1>Welcome!</h1>
      <h2>{intro}</h2>
      <h1>Sizes:</h1>
      <div className="landing__keyboard-grid">
        {sizes.map((size, index) => {
          return (
            <Link to={`/keyboards/${size.replace(/%/,'')}`} key={index}>
              <div className="landing__keyboard-grid-item">
                  <div className="landing__keyboard-grid-content">
                    {size}
                  </div>
              </div>
            </Link>
          )
        })} 
      </div>
      <h2>Welcome to mechanical keyboards DIY info! Here you can learn about the different keyboard sizes, their components, where to buy them, and how to build them. When first starting out in this hobby, it can be really difficult to figure out all the right parts and navigating the wild west of Ali Express or Banggood. Skip waiting for DIY build kits to re-stock and stick around to figure out all the right parts here! Select a keyboard size to get started.</h2>
    </div>
  );
}

const mapStateToProps = ({ load }) => {
  return { load }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: `INCREMENT` }) }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Landing);