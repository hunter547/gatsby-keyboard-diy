import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import '../styling/header.scss'

const Header = ({ siteTitle }) => (
  <header>
    <div className = "header">
      <h1 className = "header__text">
        <Link className="header__link" to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
