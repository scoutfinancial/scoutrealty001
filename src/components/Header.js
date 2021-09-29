/* eslint-disable no-unused-vars */
import React, { useEffect } from "react"
import { Link } from "gatsby"
import Slide from "react-reveal/Slide"
import { Button } from "shards-react"
import { Image } from "react-bootstrap"
import { FaAngleDoubleDown } from "react-icons/fa"

import heroImg from "../images/foreverhome.png"
import "./Header.css"

function Header() {
  /*
  useEffect(() => {
    randomImg = imgList[Math.floor(Math.random() * imgList.length)]
  }, [])
                  */
  return (
    <div className="header__div text-center text-md-left">
      <div className="mx-2">
        <Slide left>
          <h1 className="text-white">Need a VA Home Loan?</h1>
          <h1 className="text-white hero-txt">
            Here's What Makes{" "}
            <strong
              style={{
                fontWeight: "800",
                textDecoration: "underline",
                textDecorationColor: "#fff",
              }}
            >
              Scout Lending
            </strong>{" "}
            Different.
          </h1>
          <br />
          <Link to="/loan-options"></Link>
          <Button
            outline
            size="lg"
            theme="light"
            className="hero-btn ml-2"
            onClick={() => (window.location.href = "/start")}
          >
            Get a Quote
          </Button>
        </Slide>
        <Slide right>
          <div className="mt-4 text-center text-md-right">
            <Image src={heroImg} roundedCircle className="hero-circle" />
          </div>
        </Slide>
        <Slide bottom>
          <div className="d-flex align-items-center justify-content-center mb-5">
            <Link to="/#offers">
              <FaAngleDoubleDown size={48} color="#fff" />
            </Link>
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Header
