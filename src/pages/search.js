import * as React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import { Navigation } from "react-minimal-side-navigation"
import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css"
import { FaMailBulk } from "react-icons/fa"

import Navb from "../components/Navbar2.js"
import Footr from "../components/Footer.js"
import Seo from "../components/seo"
// import Header from "../components/Header"

import "./search.css"

const SearchIndex = () => {
  return (
    <>

      <iframe
        src="http://www.crmls.org/servlet/lDisplayListings?LA=EN"
        width="100%"
        height="825em"
        className="search-iframe"
      />
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
