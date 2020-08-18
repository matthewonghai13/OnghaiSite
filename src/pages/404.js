import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../stylesheets/404.scss"
// import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="errorPage">
      <h1>page not found</h1>
    </div>
  </Layout>
)

export default NotFoundPage
