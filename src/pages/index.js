import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import "../stylesheets/index.scss"

const bgImageStyle = {
  height: "95vh",
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage
        durationFadeIn={0}
        style={bgImageStyle}
        fluid={data.ocean.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
        <div className="menuList">
          <p>
            <Link className="mainLink" to="/about">
              about me
            </Link>
          </p>
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
      </BackgroundImage>
    </Layout>
  )
}

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
    ocean: file(relativePath: { eq: "ocean.jpg" }) {
      id
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
