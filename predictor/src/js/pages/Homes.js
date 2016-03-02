import React from "react";

import Result from "../components/Result";
import * as HomeActions from "../actions/HomeActions";
import HomeStore from "../stores/HomeStore";


var zip = null;

export default class Featured extends React.Component {

    // getinitialState: function() {
    //   return {'submitted': false};
    // },


  userInput() {
    if (zip.length != 5 && typeof zip != "number"){
      alert("invalid zip code entry");
    }else{
      HomeActions.getApi(zip);
    }
  }

  handleChange(e){
    zip = Number(e.target.value);
    this.setState({'submitted': true });
  }



  render() {

    // if (this.state.submited) {
    //         return <h4>party time bitches</h4>;
    //     }
    // else {
      console.log(Result);
      return (
        <div>

          <form onSubmit={this.userInput.bind(this)} >
          <button >
                  Zip Code
          </button>
            <input onChange={this.handleChange.bind(this)}/>
          </form>

          <Result />
        </div>
      );
    // }
  }
}
