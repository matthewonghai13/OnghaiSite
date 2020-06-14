import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <p>
      <Img
        fluid={data.mattFlowerDoor.childImageSharp.fluid}
        alt="matthew onghai"
      />
    </p>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    mattFlowerDoor: file(relativePath: { eq: "mattflowerdoor.jpeg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
