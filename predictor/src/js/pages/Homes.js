import React from "react";

import Result from "../components/Result";
import * as HomeActions from "../actions/HomeActions";
import HomeStore from "../stores/HomeStore";



var zip = null;
export default class Featured extends React.Component {
  constructor() {
    super();
    this.newState = this.newState.bind(this);
     this.state = {
        submitted: false
      }
    }

  componentWillMount() {
    HomeStore.on("stateChange", this.newState);
  }

  componentWillUnmount() {
    HomeStore.removeListener("stateChange", this.newState);
  }

  newState() {
    this.setState({
      submitted: HomeStore.getState()
    });
  }

  userInput() {
    if (typeof zip != 'number' || zip.toString().length != 5){
      alert("invalid entry");
    }else{
      HomeActions.getApi(zip);
      this.setState({submitted: true });
    }
  }

  handleChange(e){
      zip = Number(e.target.value);
  }

  render() {

      console.log(this.state.submitted);
      if (this.state.submitted){
        return (
          <div>
            <Result />

          </div>
        );
      }else{
      return (
        <div>

          <form onSubmit={this.userInput.bind(this)}>
            <div className="row" className="homeForm">
              <input className="street" className="streetField" placeholder="Street Name"/>
            </div>
            <div className="row" >
              <div className="col-lg-12" className="homeForm">

                  <input placeholder="City" className="addressField"/>

                  <input placeholder="State" className="addressField"/>

                  <input placeholder="Zip Code" className="addressField" onChange={this.handleChange.bind(this)} />

              </div>
            </div>
            <div className="row" className="homeForm">
              <button className="submit" >
                    Submit
              </button>
            </div>
          </form>


        </div>
      );
    }
  }
}
