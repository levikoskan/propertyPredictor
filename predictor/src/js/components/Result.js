import React from "react";

import * as HomeActions from "../actions/HomeActions";
import HomeStore from "../stores/HomeStore";


export default class Result extends React.Component {
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

  newSearch(){
    HomeStore.updateHomePage();
  }
  render() {
    const data = this.state.homeData;
    return(
    <div>
      <h4>The score is {data.totalScore}</h4>
      <button onClick={this.newSearch.bind(this)}>enter another zip</button>
    </div>
    );
  }
}
