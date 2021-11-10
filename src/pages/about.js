import * as React from "react"
// import Slide from "react-reveal/Slide"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"

import Navb from "../components/Navbar2.js"
import Footr from "../components/Footer.js"
import Seo from "../components/seo"

import "./about.css"

const about = () => {
  return (
    <>
      <Navb />
      <Seo title="About Scout Realty" />
      <Container className="mb-5">
        <br />
        <br />
        <Row>
          <Col>
            <div className="mt-5">
              <h3>About...</h3>
              <h2>
                <strong className="bold-txt">Scout Realty</strong>
              </h2>
            </div>
          </Col>
        </Row>
        <hr />
        <br />
      </Container>
      <Footr />
    </>
  )
}

export default about

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
