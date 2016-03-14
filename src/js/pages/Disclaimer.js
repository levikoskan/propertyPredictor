import React from "react";

import { IndexLink, Link } from "react-router";

export default class Disclaimer extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const home = location.pathname === "/" ? "active" : "";
    const textStyle = { textDecoration: 'none'};
    const marginStyle = { marginTop: "-55px"};

    return (
      <div className="disclaimer" style={marginStyle}>
        <div className="homeForm">
          <h3 className="fontStyle">The Secret Sauce</h3>
        </div>

        <div className="row" className="homeForm">
          <p className="disText">
            After you enter an address this site takes that information and searches the city of Austin’s database. The three predictors of home appreciation this site focuses on are the past appreciation history of the home’s area, the annual transportation cost of the area, and finally crime data.
          </p>
        </div>
        <div className="row" className="homeForm">
          <p className="disText">
            Each data set is weighted making up a different part of the overall score. Appreciation history is weight for 50% of the overall score. The best predictor of future behavior is past behavior. Crime data is weight for 30% of the overall score. Most people like to live in a safe, quite neighborhood. Transportation cost makes up the remaining 20% of the overall score. In looking at what makes properties appreciate more then others there was a relationship between low household transportation costs and appreciation

          </p>
        </div>
        <div className="row" className="homeForm">
          <p className="disText">
            The overall score is 1 – 10 with a 10 meaning the property stands the best chance for appreciation in the next 5 to 10 years.
          </p>
        </div>

        <div className="row" className="homeForm" >
          <Link to="/" style={textStyle}>
            <button className={home} id="disBtn" className="submit"  type="button">
                  <span className="fontStyle">Try It Out</span>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}


