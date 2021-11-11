import React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Navb from "../components/Navbar2.js"
import Footr from "../components/Footer.js"
import Seo from "../components/seo"

const education = () => {
  return (
    <>
      <Navb />
      <Seo title="Education" />
      <Container>
        <Row>
          <Col>
            <br />
            <br />
            <h3 className="my-5">Education</h3>
          </Col>
        </Row>
      </Container>
      <Footr />
    </>
  )
}

export default education
