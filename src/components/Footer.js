import React from "react"
import { Link } from "gatsby"
import { Row, Col } from "shards-react"
import { pulse } from "react-animations"
import Image from "react-bootstrap/Image"
import Logo from "../images/whitelogoonly.png"
import styled, { keyframes } from "styled-components"
import {
  FaLinkedin,
  FaInstagram,
  FaSearchLocation,
  FaMapPin,
} from "react-icons/fa"

import "./Footer.css"

function Footer() {
  const pulsing = keyframes`${pulse}`
  const PulseDiv = styled.div`
    animation: 2s infinite ${pulsing};
  `

  return (
    <div className="footer__bg">
      <Row>
        <hr className="clearfix w-100 d-md-none" />
        <Col sm={12} md={4} lg={4} className="text-center">
          <h5 className="text-uppercase text-white mb-4 mt-3 font-weight-bold footer-headers">
            Scout Realty
          </h5>
          <h6 className="text-center text-white white__h6">Realty made easy</h6>
          <br />
          <div className="footer__logo">
            <PulseDiv>
              <Image
                fluid
                src={Logo}
                alt="Logo"
                className="center"
                width="75px"
              />
            </PulseDiv>
          </div>
        </Col>
        <hr className="clearfix w-100 d-md-none" />
        <Col sm={12} md={4} lg={4} className="text-center">
          <h5 className="text-uppercase mb-4 mt-3 font-weight-bold footer-headers text-white">
            Main Nav
          </h5>
          <Link className="footer-anchors" to="/search">
            <FaSearchLocation className="mr-2" />
            Search
          </Link>
          <br />
          <Link className="footer-anchors" to="/listings">
            <FaMapPin className="mr-2" />
            Listings
          </Link>
          <hr />
          <Link className="footer-anchors" to="/">
            Home
          </Link>
          <br />
          <Link className="footer-anchors" to="/about">
            About
          </Link>
          <br />
          <Link className="footer-anchors" to="/team">
            Realtors
          </Link>
          <br />
          <Link className="footer-anchors" to="/partners">
            Partners
          </Link>
          <br />
          <Link className="footer-anchors" to="/loan-options">
            Guidance
          </Link>
          <br />
          <Link className="footer-anchors" to="/loan-options">
            Education
          </Link>
          <br />
          <Link className="footer-anchors" to="/home/#contact">
            Contact
          </Link>
          <br />
        </Col>
        <hr className="clearfix w-100 d-md-none" />
        <Col md="3" className="text-center">
          <h5 className="text-white text-uppercase mb-4 mt-3 font-weight-bold footer-headers">
            Social
          </h5>

          <a
            href="https://www.linkedin.com/in/edward-oueilhe-a4975471/"
            target="_blank"
            rel="noreferrer"
            className="footer-anchors"
          >
            <FaLinkedin size={32} color="white" />
          </a>

          <br />
          <br />

          <a
            href="https://www.instagram.com/edwardoueilhe/"
            target="_blank"
            rel="noreferrer"
            className="footer-anchors"
          >
            <FaInstagram size={32} color="white" />
          </a>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col
          sm={12}
          className="text-white text-center d-flex flex-column align-items-center justify-content-center"
        ></Col>
      </Row>
      <br />
      <Row>
        <Col>
          <div className="footer__copyright text-center mb-5">
            &copy; {new Date().getFullYear()}{" "}
            <a href="/" className="footer-anchors">
              {" "}
              Scout Realty
            </a>
            <br />
            <a
              href="https://scoutindustries.com"
              className="footer__text footer-anchors"
            >
              Scout Realty is a registered trademark of Scout Financial Group,
              Inc.
            </a>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Footer
