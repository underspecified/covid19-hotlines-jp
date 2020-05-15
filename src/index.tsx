// import "core-js/stable"
// import "regenerator-runtime/runtime"
// import "react-app-polyfill/ie9"
// import "react-app-polyfill/stable"

import React from "react"
import ReactDOM from "react-dom"
import { AppContainer } from "react-hot-loader"

// Your top level component
import App from "./App"

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  const target = document.getElementById('root')

  // @ts-ignore
  const renderMethod = target.hasChildNodes()
    ? ReactDOM.hydrate
    : ReactDOM.render

  const render = (Comp: Function) => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      target
    )
  }

  // Render!
  render(App)

  // Hot Module Replacement
  if (module && module.hot) {
    module.hot.accept('./App', () => {
      render(App)
    })
  }
}
