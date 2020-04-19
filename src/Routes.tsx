import React from "react";
import { Route, Switch } from "react-router-dom";

import About from "./About";
import Covid19 from "./Covid19";
import Hotlines from "./Hotlines";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Covid19 />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/covid19">
        <Covid19 />
      </Route>
      <Route exact path="/hotlines">
        <Hotlines />
      </Route>
    </Switch>
  )
}

export default Routes
