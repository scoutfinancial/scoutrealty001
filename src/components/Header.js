/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { Link } from "gatsby"
import { Button } from "shards-react"
import Slide from "react-reveal/Slide"
import { FaAngleRight } from "react-icons/fa"
import { Dropdown } from "react-bootstrap"

import "./Header.css"

function Header() {
  return (
    <div className="header__div text-center text-md-left">
      <div className="mx-5">
        <Slide left>
          <h1 className="text-white text-center">Find Your Next Property</h1>
          <h3 className="text-white text-center">In a matter of minutes...</h3>
          <Dropdown className="text-center mt-4" size="lg">
            <Dropdown.Toggle
              variant="light"
              id="dropdown-basic"
              className="proeprty-dropdown-title"
              style={{ border: "2px solid #78cffd" }}
            >
              I want to find a property in...{"       "}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Austin, TX</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Dallas, TX</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Houston, TX</Dropdown.Item>
              <Dropdown.Item href="#/action-4">Denver, CO</Dropdown.Item>
              <Dropdown.Item href="#/action-5">Los Angeles, CA</Dropdown.Item>
              <Dropdown.Item href="#/action-7">Oakland, CA</Dropdown.Item>
              <Dropdown.Item href="#/action-8">San Francisco, CA</Dropdown.Item>
              <Dropdown.Item href="#/action-9">Miami, FL</Dropdown.Item>
              <Dropdown.Item href="#/action-10">Tampa Bay, FL</Dropdown.Item>
              <Dropdown.Item href="#/action-11">Seattle, WA</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
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
