/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { Link } from "gatsby"
import Slide from "react-reveal/Slide"
import { FaAngleRight } from "react-icons/fa"
import { Form, FloatingLabel } from "react-bootstrap"

import "./Header.css"

const Header = () => {
  const [city, setCity] = useState({
    //component state
    embedLink: "",
  })

  const updateCity = e => {
    setCity({
      ...city,
      [e.target.name]: e.target.value,
    })
    console.log(city)
  }

  const submitForm = () => {
    window.open("/listingbycity")
  }

  return (
    <div className="header__div text-center text-md-left">
      <div className="mx-5">
        <Slide left>
          <h1 className="text-white text-center">Find Your Next Property</h1>
          <h3 className="text-white text-center">In a matter of minutes...</h3>
          <div className="d-flex align-items-center justify-content-center">
            <Form
              noValidate
              onSubmit={submitForm}
              id="insform"
              netlify
              className="floatlabel"
            >
              <Form.Group className="text-center mt-4 mx-5">
                {/* <Form.Label></Form.Label> */}
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
                      Los Angeles
                    </option>
                    <option value="https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/438_city">
                      San Diego
                    </option>
                    <option value="https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/370_city">
                      Palmdale
                    </option>
                    <option value="https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/2943_city">
                      San Francisco
                    </option>
                    <option value="https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/1627_city">
                      Oakland
                    </option>
                    <option value="https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/595_city">
                      San Jose
                    </option>
                    <option value="https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/573_city">
                      Sacramento
                    </option>
                    <option value="https://apexidx.com/idx_lite/results/EN_LA/price_orderBy/asc_order/home,Townhouse_homeType/active,coming-soon,short-sales,foreclosures_homeStatus/30_city">
                      Bakersfield
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
      <div></div>
      {/*
      <div className="d-flex align-items-center justify-content-center mt-5">
        <InputGroup className="mb-1 form-container">
          <FormControl
            value={form.searchInput}
            onChange={updateForm}
            name="searchInput"
            type="name"
            placeholder="Search by city, address, or zip code"
          />
          <InputGroup.Text className="text-black search-btn">
            <FaSearchLocation size={24} color="#78cffd" />
          </InputGroup.Text>
        </InputGroup>
      </div>
      */}
    </div>
  )
}

export default Header
