import React from "react"
import { Link } from "gatsby"
import { Container, Nav, Navbar } from "react-bootstrap"

const Header = () => {
  return (
    <header>
      <Navbar bg="transparent" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Pixels<span>.</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/" activeClassName="active">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about-us" activeClassName="active">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/portfolio" activeClassName="active">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" activeClassName="active">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
