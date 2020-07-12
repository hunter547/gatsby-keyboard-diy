import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby";
import '../styling/header.scss'

const Header = ({ siteTitle }) => {

  const data = useStaticQuery(graphql`
    query svg {
      backgroundSvgJson {
        svg
      }
    }
  `)

  var svgString = data.backgroundSvgJson.svg;
  svgString = svgString.replace(/%23ffffff/,"%23023440").replace(/opacity='0.13'/, "opacity='1'");

  return(
    <header style={{backgroundImage: `url("${svgString}")`}} >
      <div className = "header">
        <h1 className = "header__text">
          <Link className="header__link" to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
