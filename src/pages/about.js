import * as React from "react"
// import Slide from "react-reveal/Slide"
import { Link, graphql } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"

import map from "../images/usmap3.svg"
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
        <Row>
          <Col sm={12} md={12} lg={4}>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in dapibus nisi, non ultrices felis. Duis eros odio, porta in
              fringilla id, iaculis vitae orci. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus in dapibus nisi, non
              ultrices felis. Duis eros odio, porta in fringilla id, iaculis
              vitae orci.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in dapibus nisi, non ultrices felis. Duis eros odio, porta in
              fringilla id, iaculis vitae orci. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus in dapibus nisi, non
              ultrices felis. Duis eros odio, porta in fringilla id, iaculis
              vitae orci.
            </p>
          </Col>
          <Col sm={12} md={12} lg={8}>
            <Image src={map} fluid />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 className="text-center mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in dapibus nisi, non ultrices felis. Duis eros odio, porta in
              fringilla id, iaculis vitae orci. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus in dapibus nisi, non
              ultrices felis. Duis eros odio, porta in fringilla id, iaculis
              vitae orci.
            </p>
            <h6 className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h6>
          </Col>
          <Col>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in dapibus nisi, non ultrices felis. Duis eros odio, porta in
              fringilla id, iaculis vitae orci. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus in dapibus nisi, non
              ultrices felis. Duis eros odio, porta in fringilla id, iaculis
              vitae orci.
            </p>
            <h6 className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h6>
          </Col>
          <Col>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              in dapibus nisi, non ultrices felis. Duis eros odio, porta in
              fringilla id, iaculis vitae orci. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Phasellus in dapibus nisi, non
              ultrices felis. Duis eros odio, porta in fringilla id, iaculis
              vitae orci.
            </p>
            <h6 className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h6>
          </Col>
        </Row>
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
