/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from "react"
import Flip from "react-reveal/Flip"
import Slide from "react-reveal/Slide"
import LightSpeed from "react-reveal/LightSpeed"
import { Nav, NavDropdown, Navbar, Button, Image } from "react-bootstrap"

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
            <NavDropdown title="About" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/about">About Us</NavDropdown.Item>
              <NavDropdown.Item href="/community">
                Community Partners
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/">Education</Nav.Link>
            <Nav.Link href="/">Contact</Nav.Link>
          </Flip>
        </Nav>
        <Nav className="mr-auto text-center d-flex align-items-center justify-content-center">
          <Slide right>
            <Nav.Link href="/">Buy</Nav.Link>
            <Nav.Link href="/">Rent</Nav.Link>
            <Nav.Link href="/">Sell</Nav.Link>
          </Slide>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavComponent
