import React from "react";

import Home from "../components/Home";
import * as HomeActions from "../actions/HomeActions";
import HomeStore from "../stores/HomeStore";

var zip = null;

export default class Featured extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      totalScore: HomeStore.getAll(),
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
      totalScore: HomeStore.getAll()
    });

  }

  // update(){
    // console.log("home page " + this.homeValue);
    // console.log("home page " + this.transValue);
    // console.log("home page " + this.crimeValue);
    // console.log("home page " + this.totalScore);

  //    this.setState({
  //     totalScore: HomeStore.getAll()
  //   });
  // }

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
    const test = this.state.totalScore;

    return (
      <div>
        <form onSubmit={this.getScore.bind(this)} >
          <button>Zip Code</button>
          <input onChange={this.handleChange.bind(this)}/>
        </form>
        <h1>Personal Property Predictor</h1>
        <h4>the total score is {test.totalScore}</h4>
      </div>
    );

  }
}
