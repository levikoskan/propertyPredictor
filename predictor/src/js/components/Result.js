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
      <div className="row" className="homeForm">
        <h4>The total score is {data.totalScore}/10</h4>
          <ul>
            <li>history of appreciation: {data.homeValue}/5</li>
            <li>crime: {data.transValue}/3</li>
            <li>transportation cost: {data.crimeValue}/2</li>
          </ul>
      </div>
      <div className="row" className="homeForm">
              <button onClick={this.newSearch.bind(this)} id="resultSubmit"className="submit" >
                    Try Another
              </button>
            </div>
    </div>
    );
  }
}
