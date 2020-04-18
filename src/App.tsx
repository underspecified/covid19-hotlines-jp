import React from "react"

import Covid19 from "./Covid19"
import Menu from "./Menu"

import "bootstrap/dist/css/bootstrap.min.css"
import "./Hotlines.css"
import "./Menu.css"

function App(props: { lang: string }): JSX.Element {
  // const lang: string = 'en'

  return (
    <div className="App">
      <Menu lang="en" />
      <Covid19 lang="en" />
    </div>
  )
}

export default App
