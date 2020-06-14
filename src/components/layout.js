/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * Wraps page files (such as index.js)
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "../stylesheets/global.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Header siteTitle={data.site.siteMetadata.title}>
        <Link to="/"></Link>
      </Header>
      <div
      // style={{
      //   margin: `0 auto`,
      //   maxWidth: 1200,
      //   padding: `0 1.0875rem 1.45rem`,
      // }}
      >
        <main
          className="content"
          style={{
            minHeight: `calc(100vh - 150px)`,
          }}
        >
          {children}
        </main>
        <Footer>{new Date().getFullYear()}</Footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
