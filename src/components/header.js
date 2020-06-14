import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../stylesheets/header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div id="header">
      <h1>
        <Link id="logo">{siteTitle}</Link>
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
