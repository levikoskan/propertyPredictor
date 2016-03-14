import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Info from "../components/info";



export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>

        <div className="row" className="homeForm">
            <h1 className="fontStyle">Property <img src="../public/homeLogo.png" alt=""/> Predictor</h1>
          </div>


        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-1">

            </div>
            <div className="col-lg-10">
              {this.props.children}
            </div>

          </div>
        </div>

      </div>

    );
  }
}
