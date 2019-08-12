import React from "react";
import { Switch, Route } from "react-router-dom";
import Contact from "./Contact";
import PhotoViewer from "./PhotoViewer";
import Gallery from "./Gallery";

const Main = () => {
  return (
    <Switch>
      <Route exact path={`/`} component={PhotoViewer}></Route>
      <Route exact path={`/galleries`} component={Gallery}></Route>
      <Route exact path={`/contact`} component={Contact}></Route>
    </Switch>
  );
};

export default Main;
