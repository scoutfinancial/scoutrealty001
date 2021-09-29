/* eslint-disable no-unused-vars */
import React, { useState } from "react"
import { Link } from "gatsby"
import { Button } from "shards-react"
import Slide from "react-reveal/Slide"
import { FaSearchLocation } from "react-icons/fa"
import { Image, InputGroup, FormControl } from "react-bootstrap"

import "./Header.css"

function Header() {
  const [form, setForm] = useState({
    searchInput: "",
  })

  const updateForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }
  /*
  useEffect(() => {
    randomImg = imgList[Math.floor(Math.random() * imgList.length)]
  }, [])
                  */
  return (
    <div className="header__div text-center text-md-left">
      <div className="mx-2">
        <Slide left>
          <h1 className="text-white">Find Your Next Property</h1>
          <h3 className="text-white">In a matter of minutes...</h3>
        </Slide>
      </div>
      <div className="d-flex align-items-center justify-content-center mt-5">
        <InputGroup className="mb-1 form-container">
          <FormControl
            value={form.searchInput}
            onChange={updateForm}
            name="searchInput"
            type="name"
            placeholder="Search by city, address, or zip code"
          />
          <InputGroup.Text className="text-black">
            <FaSearchLocation size={32} color="#78cffd" />
          </InputGroup.Text>
        </InputGroup>
      </div>
    </div>
  )
}

export default Header
