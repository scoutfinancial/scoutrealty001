/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react"
import Flip from "react-reveal/Flip"
import Slide from "react-reveal/Slide"
import LightSpeed from "react-reveal/LightSpeed"
import { Nav, NavDropdown, Navbar, Image } from "react-bootstrap"
import { FaSearchLocation, FaMapPin } from "react-icons/fa"

import Logo from "../images/whitelogoonly.png"

import "./Navbar.css"

const NavComponent = () => {
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 1
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener("scroll", handleScroll)
    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Navbar
      variant="dark"
      expand="md"
      fixed="top"
      style={{
        transition: "0.25s ease",
        backgroundColor: navBackground ? "#212529" : "transparent",
        width: "100%",
      }}
      className="transp-gradient"
    >
      <LightSpeed left>
        <Navbar.Brand href="/">
          <Image src={Logo} alt="white logo transp" width="30px" />
          Scout Realty
        </Navbar.Brand>
      </LightSpeed>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => {
          setNavBackground(navBackground ? "#212529" : "transparent")
        }}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto text-center" style={{ width: "100%" }}>
          <Flip bottom>
            <Nav.Link href="/">Realtors</Nav.Link>
            <Nav.Link href="/">About</Nav.Link>
            <NavDropdown title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/guidance">Guidance</NavDropdown.Item>
              <NavDropdown.Item href="/education">Education</NavDropdown.Item>
            </NavDropdown>
          </Flip>
        </Nav>
        <Nav className="mr-auto text-center d-flex align-items-center justify-content-center">
          <Slide right>
            <Nav.Link
              href="/search"
              className="d-flex align-items-center justify-content-center"
            >
              <FaSearchLocation className="mr-2" />
              Search
            </Nav.Link>
            <Nav.Link
              href="/listings"
              className="d-flex align-items-center justify-content-center"
            >
              <FaMapPin className="mr-2" />
              Listings
            </Nav.Link>
          </Slide>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavComponent
