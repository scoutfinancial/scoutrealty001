import React, { useState } from "react"
import Pulse from "react-reveal/Pulse"
//import Flip from "react-reveal/Flip"
//import Slide from "react-reveal/Slide"
//import Flash from "react-reveal/Flash"
import { Link, graphql } from "gatsby"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

//import Search from "../components/search"
import Bio from "../components/bio"
import Seo from "../components/seo"
import Nav from "../components/Navbar2"
import Footer from "../components/Footer"

import "./blog.css"

const Blog2 = ({ data, location }) => {
  const [section, setSection] = useState("")

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <>
        <Nav location={location} title={siteTitle} />
        <Seo title="Blog" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
        <Footer />
      </>
    )
  }

  //const featured1 = post.frontmatter.title || post.fields.slug

  return (
    <>
      <Seo title="Blog" />
      <Nav location={location} title={siteTitle} />
      <br />
      <br />
      <Container className="container-fluid">
        <Row>
          <Col>
            <h3 className="my-5 text-center featured-hdr">Most Recent Posts</h3>
          </Col>
        </Row>
        <Row>
          {posts.slice(0, 3).map(post => {
            const title = post.frontmatter.title || post.fields.slug
            //const kw = post.frontmatter.keywords.split(", ")

            return (
              <Col xs={12} sm={6} md={4} lg={4} xl={4} className="my-3">
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
                        &nbsp;
                        <small>
                          <em>published on</em> {post.frontmatter.date}
                        </small>
                        <Card.Text className="my-3">
                          <p
                            dangerouslySetInnerHTML={{
                              __html:
                                post.frontmatter.description || post.excerpt,
                            }}
                            itemProp="description"
                          />
                        </Card.Text>
                        <Link className="title-link" to={post.fields.slug}>
                          <Button
                            className="card-btn text-black"
                            variant="outline-dark"
                          >
                            View Post
                          </Button>
                        </Link>
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
            <div className="text-center">
              <Button
                className="card-btn my-5"
                variant="outline-dark"
                onClick={() => {
                  setSection("all")
                }}
              >
                See All
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          {section === "all" &&
            posts.slice(3, 50).map(post => {
              const title = post.frontmatter.title || post.fields.slug
              //const kw = post.frontmatter.keywords.split(", ")

              return (
                <Col xs={12} sm={6} md={4} lg={4} xl={4} className="my-3 mb-5">
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
                            <Card.Title className="card-title">
                              {title}
                            </Card.Title>
                          </Link>
                          &nbsp;
                          <small>
                            <em>published on</em> {post.frontmatter.date}
                          </small>
                          <Card.Text className="my-3">
                            <p
                              dangerouslySetInnerHTML={{
                                __html:
                                  post.frontmatter.description || post.excerpt,
                              }}
                              itemProp="description"
                            />
                          </Card.Text>
                          <Link className="title-link" to={post.fields.slug}>
                            <Button className="card-btn" variant="light">
                              View Post
                            </Button>
                          </Link>
                        </Card.Body>
                      </Card>
                    </Pulse>
                  </div>
                </Col>
              )
            })}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Blog2

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
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
