import * as R from "rambda";
import React from "react"
import { Jumbotron, Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

import { tx as _tx } from "./translate";

import "./Menu.css"

class Menu extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props)
    this.state = {
      lang: 'en',
    }
  }

  tx = R.partial(_tx, 'en')

  render() {
    // noinspection HtmlUnknownTarget
    return (
      <div className="menu">
        <Navbar variant="dark"
                expand="sm"
                onSelect={
                  (lang: string) => this.setState({'lang': lang})
                }>
          {/*<Navbar.Brand href="#home">#Covid19HotlinesJp</Navbar.Brand>*/}

          <Nav className="navbar-expand">
            <Nav.Item>
              <Nav.Link href="#en" disabled className="EN" eventKey="en">
                EN
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#jp" disabled className="JP" eventKey="ja">
                JP
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto menu">
              <Nav.Item>
                <LinkContainer to="/about">
                  <Nav.Link active>ABOUT</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/covid19">
                  <Nav.Link active>COVID-19</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/hotlines">
                  <Nav.Link active>HOTLINES</Nav.Link>
                </LinkContainer>
              </Nav.Item>
              <Nav.Item>
                <LinkContainer to="/info">
                  <Nav.Link disabled>INFO</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <a href="/covid19-hotlines-jp">
          <Jumbotron fluid>
            <h1>COVID-19 Hotlines in Japan</h1>
            <p>{this.tx('新型コロナウィルス対策に役立つ情報')}</p>
          </Jumbotron>
        </a>
      </div>
    )
  }
}

export default Menu
