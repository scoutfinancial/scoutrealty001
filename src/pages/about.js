import * as React from "react"
import { Link, graphql, navigate } from "gatsby"
import { Container, Row, Col, Image } from "react-bootstrap"

import map from "../images/usmap3.svg"
import Navb from "../components/Navbar2.js"
import Footr from "../components/Footer.js"
import Seo from "../components/seo"

import "./about.css"

const about = () => {
  const shortTeamList = [
    {
      name: "John Doe",
      username: "johndoe",
      title: "Licensed Real Estate Broker",
      phone: "(661) 123 - 1234",
      email: "john@scoutrealty.com",
      link: "link text",
      slug: `/people/john`,
      tags: ["Real Estate", "Licensed Broker"],
      image:
        "https://media.perchwell.com/client_website_images/pictures/000/006/433/original/CWI-3l3shj5gag.gif?1628776643",
    },
    {
      name: "Jean Deaux",
      username: "jeandeaux",
      title: "Licensed Real Estate Broker",
      phone: "(661) 123 - 1234",
      email: "jean@scoutrealty.com",
      link: "link text",
      slug: `/people/jean`,
      tags: ["Real Estate", "Licensed Broker"],
      image:
        "https://media.perchwell.com/client_website_images/pictures/000/001/255/original/Amy_Herman_Giphy.gif?1614791034",
    },
    {
      name: "Mary Anne",
      username: "marryanne",
      title: "Licensed Real Estate Broker",
      phone: "(661) 123 - 1234",
      email: "marry@scoutrealty.com",
      link: "link text",
      slug: `/people/marry`,
      tags: ["Real Estate", "Licensed Broker"],
      image:
        "https://media.perchwell.com/client_website_images/pictures/000/006/433/original/CWI-3l3shj5gag.gif?1628776643",
    },
    {
      name: "Isaiah Thomas",
      username: "isaiahthomas",
      title: "Software Engineer",
      phone: "(661) 123 - 1234",
      email: "isaiah@scoutrealty.com",
      link: "link text",
      slug: `/people/isaiah`,
      tags: ["Real Estate", "Licensed Broker"],
      image:
        "https://media.perchwell.com/client_website_images/pictures/000/001/255/original/Amy_Herman_Giphy.gif?1614791034",
    },
  ]
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
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <div className="mt-5 text-center">
              <h3>Meet Our Team!</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
          </Col>
          {shortTeamList.map((member, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} className="mt-2 mb-3">
              <div className="team-card team-widget" onClick={() => navigate("/team/")}>
                <Image src={member.image} width="100%" rounded />
                <div className="text-overlay d-flex flex-column align-items-center justify-content-center">
                  <h5 className="text-white mt-2">{member.name}</h5>
                  <p className="text-center mx-3">{member.title}</p>
                  <h6 className="text-white learn-btn">Learn More →</h6>
                </div>
              </div>
            </Col>
          ))}
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
