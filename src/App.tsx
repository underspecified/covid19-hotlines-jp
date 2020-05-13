import React from "react"
import { Root, Routes } from "react-static"
import { Router } from "@reach/router"

import "bootstrap/dist/css/bootstrap.min.css"
import "./css/Menu.css"

function App() {
  return (
    <Root>
      {/*<Menu />*/}

      <div className="content">
        {/*<React.Suspense fallback={*/}
        {/*  <div className="loading"><em>Loading...</em></div>*/}
        {/*}>*/}
        <React.Suspense fallback={ () => undefined }>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
