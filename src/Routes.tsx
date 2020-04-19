import React from "react";
import { Route, Switch } from "react-router-dom";

import About from "./About";
import Covid19 from "./Covid19";
import Hotlines from "./Hotlines";

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Covid19 lang="en"/>
      </Route>
      <Route exact path="/en">
        <Covid19 lang="en"/>
      </Route>
      <Route exact path="/en/about">
        <About lang="en"/>
      </Route>
      <Route exact path="/en/covid19">
        <Covid19 lang="en"/>
      </Route>
      <Route exact path="/en/hotlines">
        <Hotlines lang="en"/>
      </Route>

      <Route exact path="/jp">
        <Covid19 lang="jp"/>
      </Route>
      <Route exact path="/jp/about">
        <About lang="jp"/>
      </Route>
      <Route exact path="/jp/covid19">
        <Covid19 lang="jp"/>
      </Route>
      <Route exact path="/jp/hotlines">
        <Hotlines lang="jp"/>
      </Route>

      <Route path="*" exact>
        <Covid19 lang="en"/>
      </Route>
    </Switch>
  )
}

export default Routes
