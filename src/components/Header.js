/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"
import Slide from "react-reveal/Slide"
import { FaAngleRight } from "react-icons/fa"
import { Form, FloatingLabel } from "react-bootstrap"

import "./Header.css"

const Header = () => {
  const [city, setCity] = useState({
    embedLink: "",
  })

  useEffect(() => {
    console.log(city)
    console.log("^ use effect embed ^")
  }, [city])

  let cityLink = city.embedLink

  const updateCity = e => {
    setCity({
      ...city,
      [e.target.name]: e.target.value,
    })
  }

  if (
    cityLink ===
    "https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/273_city"
  ) {
    navigate(`/losangeles`)
  } else if (
    cityLink ===
    "https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/438_city"
  ) {
    navigate(`/sandiego`)
  } else if (
    cityLink ===
    "https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/370_city"
  ) {
    navigate(`/palmdale`)
  } else if (
    cityLink ===
    "https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/2943_city"
  ) {
    navigate(`/sanfrancisco`)
  } else if (
    cityLink ===
    "https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/1627_city"
  ) {
    navigate(`/oakland`)
  } else {
    console.log("city link didnt match")
  }

  return (
    <div className="header__div text-center text-md-left">
      <div className="mx-5">
        <Slide left>
          <h1 className="text-white text-center">Find Your Next Property</h1>
          <h3 className="text-white text-center">In a matter of minutes...</h3>
          <div className="d-flex align-items-center justify-content-center">
            <Form noValidate id="insform" netlify className="floatlabel">
              <Form.Group className="text-center mt-4 mx-5">
                <FloatingLabel
                  controlId="floatingSelect"
                  label="I want to find a property in..."
                  style={{ color: "black !important" }}
                >
                  <Form.Select
                    aria-label="Floating city select"
                    onChange={updateCity}
                    name="embedLink"
                    className="proeprty-dropdown-title"
                    style={{ border: "2px solid #78cffd" }}
                  >
                    <option>Select your city...</option>
                    <option value="https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/273_city">
                      Los Angeles, CA
                    </option>
                    <option value="https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/438_city">
                      San Diego, CA
                    </option>
                    <option value="https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/370_city">
                      Palmdale, CA
                    </option>
                    <option value="https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/2943_city">
                      San Francisco, CA
                    </option>
                    <option value="https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/1627_city">
                      Oakland, CA
                    </option>
                  </Form.Select>
                </FloatingLabel>
              </Form.Group>
            </Form>
          </div>
          <h5
            className="mt-5 text-center d-flex align-items-center justify-content-center h5-search-btn"
            onClick={() => {
              window.open("/search", "_self")
            }}
          >
            <FaAngleRight size={32} />
            Search for your dream property
          </h5>
        </Slide>
      </div>
    </div>
  )
}

export default Header
