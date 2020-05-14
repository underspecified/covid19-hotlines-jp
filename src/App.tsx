import React from "react"
import { Switch, Route, Link } from "react-router-dom"
import { Root } from "react-static"

import Menu from "./components/Menu"
import Routes from "./components/Routes"

import "bootstrap/dist/css/bootstrap.min.css"
import "./css/Menu.css"


function App() {
  return (
    <Root>
      <Menu />
      <Routes />
    </Root>
  )
}

export default App
