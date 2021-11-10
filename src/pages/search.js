import * as React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { Navigation } from "react-minimal-side-navigation"
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css"
import { FaMailBulk } from "react-icons/fa"

import Navb from "../components/Navbar2.js"
import Footr from "../components/Footer.js"
import Seo from "../components/seo"

import "./search.css"

const SearchIndex = () => {
  return (
    <>
      <Navb />
      <Seo title="Search Real Estate Listings" />
      <Container>
        <iframe
          src="https://www.crmls.org/servlet/lDisplayListings?LA=EN"
          className="search-iframe mb-1"
        />
      </Container>
      <Footr />
    </>
  )
}

export default SearchIndex

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
