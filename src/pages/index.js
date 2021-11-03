import * as React from "react"
import { Link, graphql } from "gatsby"
import Pulse from "react-reveal/Pulse"
import Flip from "react-reveal/Flip"
import { Container, Row, Col, Card } from "react-bootstrap"
import {
  FaSearchLocation,
  FaQuestion,
  FaHandsHelping,
  FaCertificate,
  FaSchool,
  FaCalculator,
} from "react-icons/fa"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Headr from "../components/Header"
import Faq from "../components/FaqAccordion"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  let tiles = [
    {
      title: "Finding a Home Made Simple",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dapibus nisi, non ultrices felis. Duis eros odio, porta in fringilla id, iaculis vitae orci.",
      link: "link text",
      slug: "/",
      icon: (
        <div className="d-flex align-items-center justify-content-center mb-4">
          <FaSearchLocation size={42} color="#78cffd" />
        </div>
      ),
    },
    {
      title: "Why Choose Scout?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dapibus nisi, non ultrices felis. Duis eros odio, porta in fringilla id, iaculis vitae orci.",
      link: "link text",
      slug: "/",
      icon: (
        <div className="d-flex align-items-center justify-content-center mb-4">
          <FaQuestion size={42} color="#78cffd" />
        </div>
      ),
    },
    {
      title: "Pressure Free Assistance",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dapibus nisi, non ultrices felis. Duis eros odio, porta in fringilla id, iaculis vitae orci.",
      link: "link text",
      slug: "/",
      icon: (
        <div className="d-flex align-items-center justify-content-center mb-4">
          <FaHandsHelping size={42} color="#78cffd" />
        </div>
      ),
    },
    {
      title: "Work with Experienced Agents",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dapibus nisi, non ultrices felis. Duis eros odio, porta in fringilla id, iaculis vitae orci.",
      link: "link text",
      slug: "/",
      icon: (
        <div className="d-flex align-items-center justify-content-center mb-4">
          <FaCertificate size={42} color="#78cffd" />
        </div>
      ),
    },
    {
      title: "Educational Resources Online",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dapibus nisi, non ultrices felis. Duis eros odio, porta in fringilla id, iaculis vitae orci.",
      link: "link text",
      slug: "/",
      icon: (
        <div className="d-flex align-items-center justify-content-center mb-4">
          <FaSchool size={42} color="#78cffd" />
        </div>
      ),
    },
    {
      title: "What Can I afford?",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in dapibus nisi, non ultrices felis. Duis eros odio, porta in fringilla id, iaculis vitae orci.",
      link: "link text",
      slug: "/",
      icon: (
        <div className="d-flex align-items-center justify-content-center mb-4">
          <FaCalculator size={42} color="#78cffd" />
        </div>
      ),
    },
  ]

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <>
      <Layout>
        <Container fluid>
          <Row>
            <Headr />
          </Row>
        </Container>
        <Container>
          <Row>
            {posts.slice(0, 3).map(post => {
              const title = post.frontmatter.title || post.fields.slug
              //const kw = post.frontmatter.keywords.split(", ")

              return (
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className="my-5">
                  <div
                    key={post.fields.slug}
                    className="d-flex align-items-center justify-content-center"
                  >
                    <Pulse>
                      <Card className="card-container recent-container">
                        <Card.Img variant="top" src={post.frontmatter.image} />
                        <Card.Body className="d-flex flex-column justify-content-around">
                          <Link
                            className="title-link txt-slug"
                            to={post.fields.slug}
                          >
                            <Card.Title>{title}</Card.Title>
                          </Link>
                          <small>
                            <em>published on</em> {post.frontmatter.date}
                          </small>
                        </Card.Body>
                      </Card>
                    </Pulse>
                  </div>
                </Col>
              )
            })}
          </Row>
          <Row>
            <Col>
              <h3 className="text-center mt-5">
                The <strong style={{ color: "#78cffd" }}>new way</strong> to
                purchase a home
              </h3>
              <p className="text-center mx-5 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus in dapibus nisi, non ultrices felis. Duis eros odio,
                porta in fringilla id, iaculis vitae orci. Sed quis sapien sed
                libero eleifend bibendum ac non quam. Maecenas malesuada ex
                dolor, a rutrum ligula pellentesque a. Donec auctor nulla
                libero, eget tincidunt ligula mollis vel. Donec suscipit
                efficitur augue, id fringilla sem efficitur imperdiet. Fusce
                tortor augue, dictum ac mi non, convallis pharetra purus. Proin
                diam nulla, cursus a orci eget, rutrum consectetur urna.
              </p>
            </Col>
          </Row>
          <Row>
            {tiles.map((tile, index) => (
              <Col key={index} xs={12} md={6} lg={4} className="mb-5">
                {tile.icon}
                <Flip bottom>
                  <h5 className="d-flex align-items-center justify-content-center">
                    {tile.title}
                  </h5>
                  <p className="text-center mx-3">{tile.description}</p>
                  <a className="d-flex align-items-center justify-content-center">
                    {tile.link}
                  </a>
                </Flip>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="mb-5">
              <h3 className="text-center mt-5">Frequently Asked Questions</h3>
              <Faq />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export default BlogIndex

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
          image
        }
      }
    }
  }
`
