import React from "react"
import {Container, Nav, Navbar} from "react-bootstrap"
import "./Menu.css"

function Menu() {
  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      {/*<Navbar.Brand href="#home">#Covid19HotlinesJp</Navbar.Brand>*/}

      <Nav className="navbar-expand">
        <Nav.Item>
          <Nav.Link href="#en" active className="EN">EN</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#jp" active className="JP">JP</Nav.Link>
        </Nav.Item>
      </Nav>

      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto menu">
          <Nav.Item>
            <Nav.Link href="#about" active>ABOUT</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#hotlines" active>HOTLINES</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#news" active>NEWS</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#news" active>LINKS</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Menu
