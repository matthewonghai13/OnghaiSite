// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../stylesheets/footer.scss"

const Footer = ({ siteTitle }) => (
  <footer>
    <div className="footer">
      <p>copyright 2020</p>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
