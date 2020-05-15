import React from "react"
import { Switch, Route } from "react-router-dom"
import { Root, Routes } from "react-static"

import Menu from "./components/Menu"

import "bootstrap/dist/css/bootstrap.min.css"
import "./css/Menu.css"

function App() {
  return (
    <Root>
      <Menu />

      <div className="content">
        <React.Suspense fallback={ () => undefined }>
          <Switch>
            <Route render={() => <Routes path="*" />} />
          </Switch>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
