import React, { useState } from "react"
import { Container, Row, Col, Nav, Image } from "react-bootstrap"

import Footer from "../components/Footer"
import Navbar from "../components/Navbar2"
import Insu from "../components/partners/Insurance"
import Real from "../components/partners/Realtors"
import Cont from "../components/partners/Contractors"
import Home from "../components/partners/HomeInspectors"
import Pest from "../components/partners/PestControl"
import Land from "../components/partners/Landscaping"
import NonP from "../components/partners/NonProfits"
import Build from "../components/partners/Builders"

import Builder from "../images/Builder.png"
import Realtors from "../images/Realtors.png"
import Insurance from "../images/Insurance.png"
import Nonprofit from "../images/non-profit.png"
import Landscaping from "../images/Landscaping.png"
import PestControl from "../images/PestControl.png"
import Contractors from "../images/Contractors.png"
import HomeInspector from "../images/HomeInspector.png"

import "./about.css"
import "./partners.css"

const Partners = () => {
  const [section, setSection] = useState("")

  return (
    <>
      <Container fluid={true} className="container-fluid">
        <Row>
          <Col>
            <Navbar />
          </Col>
        </Row>
      </Container>
      <Container className="container-fluid about__bg">
        <Row>
          <Col className="mt-5">
            <h3 className="text-center mt-5">Our Valued Partners</h3>
          </Col>
        </Row>
        <Row className="mb-3">
          <Nav
            variant="tabs"
            defaultActiveKey="/home"
            className="d-flex align-items-center justify-content-around"
          >
            <Nav.Item
              onClick={() => {
                setSection("insurance")
              }}
            >
              <Nav.Link eventKey="insurance" className="nav-tabs">
                <Image src={Insurance} rounded className="partner-icons" />{" "}
                Insurance
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onClick={() => {
                setSection("realtors")
              }}
            >
              <Nav.Link eventKey="realtors" className="nav-tabs">
                <Image src={Realtors} rounded className="partner-icons" />{" "}
                Realtors
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onClick={() => {
                setSection("contractors")
              }}
            >
              <Nav.Link eventKey="contractors" className="nav-tabs">
                <Image src={Contractors} rounded className="partner-icons" />{" "}
                Contractors
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onClick={() => {
                setSection("homeinspectors")
              }}
            >
              <Nav.Link eventKey="homeinspectors" className="nav-tabs">
                <Image src={HomeInspector} rounded className="partner-icons" />{" "}
                Home Inspectors
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onClick={() => {
                setSection("pestcontrol")
              }}
            >
              <Nav.Link eventKey="pestcontrol" className="nav-tabs">
                <Image src={PestControl} rounded className="partner-icons" />{" "}
                Pest Control
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onClick={() => {
                setSection("landscaping")
              }}
            >
              <Nav.Link eventKey="landscaping" className="nav-tabs">
                <Image src={Landscaping} rounded className="partner-icons" />{" "}
                Landscaping
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onClick={() => {
                setSection("builders")
              }}
            >
              <Nav.Link eventKey="builders" className="nav-tabs">
                <Image src={Builder} rounded className="partner-icons" />{" "}
                Builders
              </Nav.Link>
            </Nav.Item>
            <Nav.Item
              onClick={() => {
                setSection("nonprofits")
              }}
            >
              <Nav.Link eventKey="nonprofits" className="nav-tabs">
                <Image src={Nonprofit} rounded className="partner-icons" />{" "}
                Non-Profits
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Row>
          <Col>
            {section === "insurance" && <Insu />}
            {section === "realtors" && <Real />}
            {section === "contractors" && <Cont />}
            {section === "homeinspectors" && <Home />}
            {section === "pestcontrol" && <Pest />}
            {section === "landscaping" && <Land />}
            {section === "nonprofits" && <NonP />}
            {section === "builders" && <Build />}
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="container-fluid footer__bg">
        <Footer />
      </Container>
    </>
  )
}

export default Partners
