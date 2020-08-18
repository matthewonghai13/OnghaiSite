import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Youtube = () => (
  <Layout>
    <SEO title="Portfolio" />

    <div className="menuList">
      <p className="lead">
        <Link className="mainLink" to="/about">
          art & design
        </Link>
      </p>
      <p className="lead">
        <Link className="mainLink" to="/programming">
          programming
        </Link>
      </p>
      <p className="lead">
        <a className="mainLink" href="http://github.com/matthewonghai13">
          github
        </a>
      </p>
      <p className="lead">
        <a className="mainLink" href="http://linkedin.com/in/matthewonghai">
          linkedin
        </a>
      </p>
    </div>
  </Layout>
)

export default Youtube
