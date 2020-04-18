import React from "react"
import * as R from "rambda"

import About from "./About";
import Hotlines from "./Hotlines"
import Menu from "./Menu";

import "bootstrap/dist/css/bootstrap.min.css"
import "./Hotlines.css"
import "./Menu.css"

function App(props: { lang: string }): JSX.Element {
  // const lang: string = 'en'

  return (
    <div className="App">
      <Menu lang="en" />
      <About lang="en" />
    </div>
  )
}

export default App
