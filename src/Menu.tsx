import React from "react"
import { Jumbotron, Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useLocation } from "react-router"

import { tx as _tx } from "./translate"

import "./Menu.css"

const path2Lang = (path: string): string =>
  path.startsWith('/jp') ? 'jp' : 'en'

const stripLang = (path: string): string => {
  const xs = path.split('/')
  const filtered = xs.filter(x => x !== 'en' && x !== 'jp')
  return filtered.join('/')
}

const updateLang = (lang: string, path: string) =>
  "/" + lang + stripLang(path)

const Menu = (): JSX.Element => {
  // noinspection HtmlUnknownTarget
  return (
    <div className="menu">
      <Navbar variant="dark"
              expand="sm">
        {/*<Navbar.Brand href="/">{useLocation().pathname}</Navbar.Brand>*/}

        <Nav className="navbar-expand">
          <Nav.Item>
            <LinkContainer to={updateLang("en", useLocation().pathname)}>
              <Nav.Link active className="EN" eventKey="en">
                {path2Lang(useLocation().pathname) === "jp" ? "EN" : "英語"}
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to={updateLang("jp", useLocation().pathname)}>
              <Nav.Link active className="JP" eventKey="jp">
                {path2Lang(useLocation().pathname) === "en" ? "日本語" : "JP"}
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto menu">
            <Nav.Item>
              <LinkContainer
                to={"/" + path2Lang(useLocation().pathname) + "/about"}>
                <Nav.Link active>ABOUT</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer
                to={"/" + path2Lang(useLocation().pathname) + "/covid19"}>
                <Nav.Link active>COVID-19</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer
                to={"/" + path2Lang(useLocation().pathname) + "/hotlines"}>
                <Nav.Link active>HOTLINES</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer
                to={"/" + path2Lang(useLocation().pathname) + "/info"}>
                <Nav.Link active>INFO</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <a href={"/" + path2Lang(useLocation().pathname)}>
        <Jumbotron fluid>
          <h1>COVID-19 Hotlines in Japan</h1>
          <p>
            {_tx(path2Lang(useLocation().pathname))(
              '新型コロナウィルス対策に役立つ情報')} #COVID19HotlinesJp
          </p>
        </Jumbotron>
      </a>
    </div>
  )
}

export default Menu
