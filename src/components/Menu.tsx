import React from "react"
import { Jumbotron, Nav, Navbar } from "react-bootstrap"

import { tx as _tx } from "../translate"

import "../css/Menu.css"

const stripLang = (path: string): string => {
  const xs = path.split('/')
  const filtered = xs.filter(x => x !== 'en' && x !== 'jp')
  return filtered.join('/')
}

const updateLangFromPath = (lang: string, path: string): string =>
  "/" + lang + stripLang(path)

const Menu = (props: {lang: string, path: string}): JSX.Element => {
  // noinspection HtmlUnknownTarget
  return (
    <div className="menu">
      <Navbar variant="dark"
              expand="sm">

        <Nav className="navbar-expand">
          <Nav.Item>
            <Nav.Link active className="EN" eventKey="en"
                      href={updateLangFromPath("en", props.path)}>
              {props.lang === "jp" ? "EN" : "英語"}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active className="JP" eventKey="jp"
                    href={updateLangFromPath("jp", props.path)}>
              {props.lang === "en" ? "日本語" : "JP"}
            </Nav.Link>
          </Nav.Item>
        </Nav>

        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto menu">
            <Nav.Item>
              <Nav.Link active href={`/${props.lang}/about`}>
                ABOUT
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link active href={`/${props.lang}/covid19`}>
                COVID-19
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link active href={`/${props.lang}/hotlines`}>
                HOTLINES
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link active href={`/${props.lang}/info`}>
                INFO
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link active href={`/${props.lang}/support`}>
                SUPPORT
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <a href={`/${props.lang}`}>
        <Jumbotron fluid>
          <h1>COVID-19 Hotlines in Japan</h1>
          <p>
            {_tx(props.lang)(
              '新型コロナウィルス対策に役立つ情報')} #COVID19HotlinesJp
          </p>
        </Jumbotron>
      </a>
    </div>
  )
}

export default Menu
