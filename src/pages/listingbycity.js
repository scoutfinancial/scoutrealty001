import React, { useEffect } from "react"
import { Link, graphql } from "gatsby"
import { Container } from "react-bootstrap"

import Navb from "../components/Navbar2.js"
import Footr from "../components/Footer.js"
import Seo from "../components/seo"

import "./search.css"

const ListByCity = props => {
  useEffect(() => {
    console.log(props.newCity)
  }, [props])

  return (
    <>
      <Navb />
      <Seo title="Real Estate Listings" />
      <Container>
        <iframe
          src={props.newCity}
          className="search-iframe mb-1"
          scrolling="no"
          frameBorder="0"
          title="listing by city"
        />
      </Container>
      <Footr />
    </>
  )
}

export default ListByCity

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
