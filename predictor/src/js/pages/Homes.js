import React from "react";
import { IndexLink, Link } from "react-router";

import Home from "../components/Home";
import * as HomeActions from "../actions/HomeActions";
import HomeStore from "../stores/HomeStore";


var zip = null;

export default class Featured extends React.Component {
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

  userInput() {
    if (zip.length != 5 && typeof zip != "number"){
      alert("invalid zip code entry");
    }else{
      HomeActions.getApi(zip);
    }
  }

  handleChange(e){
    zip = Number(e.target.value);
  }

  render() {
    const test = this.state.homeData;
    console.log(test.totalScore);
    const archivesClass = location.pathname.match(/^\/results/) ? "active" : "";

    return (
      <div>
        <form onSubmit={this.userInput.bind(this)} >
        <button class={archivesClass}>
                <Link to="results">Zip Code</Link>
        </button>
          <input onChange={this.handleChange.bind(this)}/>
        </form>
        <h1>Personal Property Predictor {test.totalScore}</h1>


      </div>
    );

  }
}
