import React from "react"
import { Container, Row, Col, Card, Image } from "react-bootstrap"

import "./Insurance.css"

const Insurance = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Card
            className="my-3 mb-5 d-flex align-items-center justify-content-between partner-cards"
            style={{ border: "1px solid #78cffd" }}
          >
            <Card.Body>
              <Container fluid={true} className="container-fluid">
                <Row>
                  <Col xs={12} md={6}>
                    <Card.Title className="mt-4">Scout Insurance</Card.Title>
                    <a
                      href="https://scoutcovered.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="scout-txt"
                    >
                      <Card.Subtitle className="mb-2 scout-txt">
                        scoutcovered.com
                      </Card.Subtitle>
                    </a>
                    <h6 className="mt-3">Services:</h6>
                    <ul>
                      <li>auto insurance</li>
                      <li>home insurance</li>
                      <li>life insurance</li>
                    </ul>
                  </Col>
                  <Col>
                    <Image
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80"
                      fluid
                      className="my-3"
                    />
                  </Col>
                </Row>
              </Container>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="my-3 mb-5 d-flex align-items-center justify-content-between partner-cards">
            <Card.Body>
              <Container fluid={true} className="container-fluid">
                <Row>
                  <Col xs={12} md={6}>
                    <Card.Title className="mt-4">Scout Insurance</Card.Title>
                    <a
                      href="https://scoutcovered.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="scout-txt"
                    >
                      <Card.Subtitle className="mb-2 scout-txt">
                        scoutcovered.com
                      </Card.Subtitle>
                    </a>
                    <h6 className="mt-3">Services:</h6>
                    <ul>
                      <li>auto insurance</li>
                      <li>home insurance</li>
                      <li>life insurance</li>
                    </ul>
                  </Col>
                  <Col>
                    <Image
                      src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1266&q=80"
                      fluid
                      className="my-3"
                    />
                  </Col>
                </Row>
              </Container>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Insurance
