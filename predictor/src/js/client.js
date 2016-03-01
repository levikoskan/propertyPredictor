import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Favorites from "./pages/Favorites";
import Homes from "./pages/Homes";
import Layout from "./pages/Layout";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Homes}></IndexRoute>
      <Route path="favorites" component={Favorites}></Route>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
