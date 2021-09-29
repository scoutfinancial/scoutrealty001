import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"

import Nav from "./Navbar"
import Footer from "./Footer"
import "./layout.css"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Nav siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
      </div>
      <Container fluid style={{ background: "#212529" }}>
        <Footer />
      </Container>
    </>
  )
}

export default Layout
