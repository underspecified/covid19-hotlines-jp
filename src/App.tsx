import React from "react"

import Menu from "./Menu"
import Routes from "./Routes"

import "bootstrap/dist/css/bootstrap.min.css"
import "./Hotlines.css"
import "./Menu.css"

function App(): JSX.Element {
  // const lang: string = 'en'

  return (
    <div className="App">
      <Menu />
      <Routes />
    </div>
  )
}

export default App
