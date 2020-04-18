import * as R from "rambda";
import React from "react"
import { Jumbotron, Nav, Navbar } from "react-bootstrap"

import { tx as _tx } from "./translate";

import "./Menu.css"

interface IProps {
}

interface IState {
  lang: string;
}


class Menu extends React.Component<{lang: string }, IState> {
  constructor(props: { lang: string }) {
    super(props)
    this.state = {
      lang: 'en',
    }
  }

  tx = R.partial(_tx, this.props.lang)

  render() {
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
              <Nav.Link href="#en" active className="EN" eventKey="en">
                EN
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#jp" active className="JP" eventKey="ja">
                JP
              </Nav.Link>
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

        <Jumbotron fluid>
          <h1>COVID-19 Hotlines in Japan</h1>
          <p>{this.tx('新型コロナウィルス対策に役立つ情報')}</p>
        </Jumbotron>
      </div>
    )
  }
}

export default Menu
