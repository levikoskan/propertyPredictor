import React from "react";
import { IndexLink, Link } from "react-router";

import Home from "../components/Home";
import * as HomeActions from "../actions/HomeActions";
import HomeStore from "../stores/HomeStore";


var zip = null;

export default class Archives extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      homeData: HomeStore.getScore(),
    };

  }

  componentWillMount() {
    HomeStore.on("change", this.update);
  }

  componentWillUnmount() {
    HomeStore.removeListener("change", this.update);
  }

update() {
    this.setState({
      homeData: HomeStore.getScore()
    });

  }

  getScore() {
    if (zip.length != 5 && typeof zip != "number"){
      alert("invalid zip code entry");
    }else{
      HomeActions.getScore(zip);
    }
  }

  handleChange(e){
    zip = Number(e.target.value);
  }

  render() {
    const test = this.state.homeData;
    const featuredClass = location.pathname === "/" ? "active" : "";

    return (
      <div>

        <button class={featuredClass}>
                <Link to="/">"Test a new address?"</Link>
        </button>

        <h1>results son {test.totalScore}</h1>


      </div>
    );

  }
}
