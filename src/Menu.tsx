import React from "react"
import { Nav, Navbar } from "react-bootstrap"
import "./Menu.css"

function Menu() {
  return (
    <div className="menu">
      <Navbar bg="dark" variant="dark" expand="sm">
        {/*<Navbar.Brand href="#home">#Covid19HotlinesJp</Navbar.Brand>*/}

        <Nav className="navbar-expand">
          <Nav.Item>
            <Nav.Link href="#en" disabled className="EN">EN</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#jp" disabled className="JP">JP</Nav.Link>
          </Nav.Item>
        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto menu">
            <Nav.Item>
              <Nav.Link href="#about" disabled>ABOUT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#hotlines" disabled>HOTLINES</Nav.Link>
            </Nav.Item>
            {/*<Nav.Item>*/}
            {/*  <Nav.Link href="#news" active>NEWS</Nav.Link>*/}
            {/*</Nav.Item>*/}
            {/*<Nav.Item>*/}
            {/*  <Nav.Link href="#news" active>LINKS</Nav.Link>*/}
            {/*</Nav.Item>*/}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Menu
