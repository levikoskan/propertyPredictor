import React from "react";
import { Link } from "react-router";

import Footer from "../components/layout/Footer";
import Nav from "../components/layout/Nav";
import Info from "../components/info";
import Dis from "../components/disclaimer";

export default class Layout extends React.Component {
  render() {
    const { location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>

        <div className="row" className="homeForm">
            <h1>Property Predictor</h1>
          </div>
          <div className="row" className="homeForm">
            <h4>Will your property appreciate?</h4>
          </div>


        <div className="container" style={containerStyle}>
          <div className="row">
            <div className="col-lg-1">
              <Info />
            </div>
            <div className="col-lg-10">
              {this.props.children}
            </div>
            <div className="col-lg-1">
              <Dis />
            </div>

          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}
