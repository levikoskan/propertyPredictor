import React from "react";

import * as HomeActions from "../actions/HomeActions";
import HomeStore from "../stores/HomeStore";


export default class Result extends React.Component {
   constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      homeData: HomeStore.getHomeData(),
      homeDataScore: HomeStore.getScore(),
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
      homeData: HomeStore.getHomeData(),
      homeDataScore: HomeStore.getScore()
    });
  }

  newSearch(){
    HomeStore.updateHomePage();
  }

    showMoreData(){
      if (false){
        return false
      }else{
        return(
          <div>hello
          </div>
          )
      }
    }


  render() {
    const dataScore = this.state.homeDataScore;
    const data = this.state.homeData;
    console.log(data);
    console.log(dataScore);

    return(
    <div>
      <div className="row" className="homeForm resultTitle">
        <h2 className="fontStyle">Results</h2>
      </div>
      <div className="row"  className="homeForm">
        <h4 className="resultInfo">Your score based between 1-10</h4>
      </div>
      <div className="row"  className="homeForm">
        <h4 className="resultInfo" id="resultBottomInfo">1: Not likely at all for appreciation. 10: Extremely likely for appreciation.</h4>
      </div>
      <div className="row" className="homeForm resultScores">
        <h4 id="totalScore">Property appreciation score: {dataScore.totalScore}</h4>

          <ul className="resultUl">
            <li>history of appreciation: {dataScore.homeValue}/5</li>
            <li>crime: {dataScore.transValue}/3</li>
            <li>transportation cost: {dataScore.crimeValue}/2</li>
          </ul>
      </div>
      <div className="row" className="homeForm">
              <button onClick={this.newSearch.bind(this)} id="resultSubmit"className="submit" >
                    <span className="fontStyle">Try Another</span>
              </button>
            </div>
    </div>
    );
  }
}
