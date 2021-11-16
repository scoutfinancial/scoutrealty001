import React, { useEffect } from "react"
import { graphql } from "gatsby"
import { Container } from "react-bootstrap"

import Navb from "../components/Navbar2.js"
import Footr from "../components/Footer.js"
import Seo from "../components/seo"

import "./search.css"

const SanDiego = () => {
  return (
    <>
      <Navb />
      <Seo title="Real Estate Listings" />
      <Container>
        <iframe
          src="https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/438_city"
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

export default SanDiego

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
