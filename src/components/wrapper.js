/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";


import Header from "./header"
import Footer from "./footer"
import "../styling/wrapper.scss";

const Wrapper = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      backgroundSvgJson {
        svg
      }
    }
  `)

  const svgString = data.backgroundSvgJson.svg;

  useEffect(() => {
    document.body.style.backgroundImage = `url("${svgString}")`;
  }, [svgString]);

  return (
    <>
      <div className="container">
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="wrapper">
          <main>{children}</main>
        </div>
        <Footer />
      </div>
   </> 
  )
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Wrapper
