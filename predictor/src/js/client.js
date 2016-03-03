import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Homes from "./pages/Homes";
import Layout from "./pages/Layout";
import Disclaimer from "./pages/Disclaimer";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Homes}></IndexRoute>
      <Route path="disclaimer" component={Disclaimer}></Route>
    </Route>
  </Router>,
app);
