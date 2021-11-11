//node modules
import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Slide from "react-reveal/Slide"
import Flip from "react-reveal/Flip"
import { Container, Row, Col, Button } from "react-bootstrap"

//self created imports
import Nav from "../components/Navbar"
import Footer from "../components/Footer"
import Seo from "../components/seo"

import "./post.css"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const blogImg = post.frontmatter.image

  //scroll method for get a qte btn
  const isBrowser = typeof window !== "undefined"

  const [showScroll2, setShowScroll2] = useState(false)

  if (isBrowser) {
    const checkScrollTop2 = () => {
      if (!showScroll2 && window.pageYOffset > 5) {
        setShowScroll2(true)
      } else if (showScroll2 && window.pageYOffset <= 5) {
        setShowScroll2(false)
      }
    }
    window.addEventListener("scroll", checkScrollTop2)
  }

  return (
    <>
      <Nav location={location} title={siteTitle} />
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div
        className="bottom-stick"
        style={{ display: showScroll2 ? "flex" : "none" }}
      >
        <Link to="/start">
          <Button style={{ background: "#78cffd", border: "2px solid white" }}>
            Get a quote
          </Button>
        </Link>
      </div>
      <div
        className="frame"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.15)), url("${blogImg}")`,
        }}
      >
        <Container>
          <Row>
            <Col>
              <div className="py-5 text-white text-center">
                <header>
                  <Flip top>
                    <h1 itemProp="headline" className="py-5 text-white">
                      {post.frontmatter.title}
                    </h1>
                  </Flip>
                  <Flip top>
                    <p>{post.frontmatter.date}</p>
                  </Flip>
                </header>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
            <Slide bottom>
              <article
                className="blog-post my-3 mt-5"
                itemScope
                itemType="http://schema.org/Article"
              >
                <section
                  dangerouslySetInnerHTML={{ __html: post.html }}
                  itemProp="articleBody"
                />
                <hr className="colored-div" />
              </article>
            </Slide>
            <nav className="blog-post-nav">
              <ul
                style={{
                  display: `flex`,
                  flexWrap: `wrap`,
                  justifyContent: `space-between`,
                  listStyle: `none`,
                  padding: 0,
                }}
              >
                <Slide left>
                  <li>
                    {previous && (
                      <Link to={previous.fields.slug} rel="prev">
                        ← {previous.frontmatter.title}
                      </Link>
                    )}
                  </li>
                </Slide>

                <Slide right>
                  <li>
                    {next && (
                      <Link to={next.fields.slug} rel="next">
                        {next.frontmatter.title} →
                      </Link>
                    )}
                  </li>
                </Slide>
              </ul>
            </nav>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        image
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
