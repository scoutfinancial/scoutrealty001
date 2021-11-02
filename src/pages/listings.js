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

const ListIndex = () => {
  return (
    <>
      <Navb />
      <iframe
        src="https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/273_city"
        className="search-iframe mb-1"
        scrolling="no"
        frameBorder="0"
        
      />
      <Footr />
    </>
  )
}

export default ListIndex

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
