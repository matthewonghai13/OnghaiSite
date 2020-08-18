import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Img from "gatsby-image"
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
          {/* <p>
            <a className="mainLink" href="https://foxly.in/DEBh">
              youtube
            </a>
          </p> */}
          <p>
            <a className="mainLink" href="youtube://1rKa7l_iASI">
              youtube
            </a>
          </p>
          <p>
            <Link className="mainLink" to="/music">
              spotify
            </Link>
          </p>
          <p>
            <Link className="mainLink" to="/music">
              soundcloud
            </Link>
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
