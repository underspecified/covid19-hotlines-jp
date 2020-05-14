import React from "react"
import { Jumbotron, Nav, Navbar } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import { useLocation } from "react-static"

import { tx as _tx } from "../translate"

import "../css/Menu.css"

const path2Lang = (path: string): string =>
  path.startsWith('/jp') ? 'jp' : 'en'

const stripLang = (path: string): string => {
  const xs = path.split('/')
  const filtered = xs.filter(x => x !== 'en' && x !== 'jp')
  return filtered.join('/')
}

const updateLang = (lang: string, path: string): string =>
  "/" + lang + stripLang(path)

const Menu = (): JSX.Element => {
  const path = useLocation()?.pathname || "/"
  const lang = path2Lang(path)
  // noinspection HtmlUnknownTarget
  return (
    <div className="menu">
      <Navbar variant="dark"
              expand="sm">

        <Nav className="navbar-expand">
          <Nav.Item>
            <LinkContainer to={updateLang("en", path)}>
              <Nav.Link active className="EN" eventKey="en">
                {lang === "jp" ? "EN" : "英語"}
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to={updateLang("jp", path)}>
              <Nav.Link active className="JP" eventKey="jp">
                {lang === "en" ? "日本語" : "JP"}
              </Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto menu">
            <Nav.Item>
              <LinkContainer
                to={"/" + lang + "/about"}>
                <Nav.Link active>ABOUT</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer
                to={"/" + lang + "/covid19"}>
                <Nav.Link active>COVID-19</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer
                to={"/" + lang + "/hotlines"}>
                <Nav.Link active>HOTLINES</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer
                to={"/" + lang + "/info"}>
                <Nav.Link active>INFO</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer
                to={"/" + lang + "/support"}>
                <Nav.Link active>SUPPORT</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <a href={"/" + lang}>
        <Jumbotron fluid>
          <h1>COVID-19 Hotlines in Japan</h1>
          <p>
            {_tx(lang)(
              '新型コロナウィルス対策に役立つ情報')} #COVID19HotlinesJp
          </p>
        </Jumbotron>
      </a>
    </div>
  )
}

export default Menu
