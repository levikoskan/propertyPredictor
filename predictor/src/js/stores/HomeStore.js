import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class HomeStore extends EventEmitter {
  constructor() {
    super()
    this.totalScore = {
      totalScore: 0
    }

     // homeValue: 0,
     //  transValue: 0,
     //  crimeValue: 0
  }

getAll(){
  console.log("homestore totalscore value is "+ this.totalScore.totalScore);
  return this.totalScore;
}

  handleActions(action) {
    switch(action.type) {
      case "RECEIVE_SCORE": {
        this.totalScore.totalScore = action.totalScore;
        // this.homeValue = action.homeValue;
        // this.transValue = action.transValue;
        // this.crimeValue = action.crimeValue;
        this.emit("change");
      }
    }
  }

}

created the function to determin our home value score
  function homeValue(value){
    var score = (value/100) * 5;
    return score > 5 ? 5 : score;
  }

  function crimeValue(zip){
    // iterate through the array get the zips value out and return it
    var zipArray =[
    {zip:78617, value: 2.75}, {zip:78701, value:1.25}, {zip:78702, value: 1.5}, {zip:78703, value: 1.75}, {zip:78704, value: 1}, {zip:78705, value: .5},
    {zip:78717, value: 2.35}, {zip:78721, value: 1.25}, {zip:78722, value: 1.75}, {zip:78723, value: 1.25}, {zip:78724, value: 2}, {zip:78726, value: 2.35},
    {zip:78727, value: 2}, {zip:78728, value: 2}, {zip:78729, value: 1.75}, {zip:78730, value: 2.75}, {zip:78731, value: 1.75}, {zip:78732, value: 3},
    {zip:78735, value: 2.35}, {zip:78739, value: 2.35}, {zip:78741, value: 1}, {zip:78742, value: 1.5}, {zip:78744, value: 2}, {zip:78745, value: 1.5},
    {zip:78746, value: 2.75}, {zip:78748, value: 2}, {zip:78749, value: 2}, {zip:78750, value: 2.35}, {zip:78751, value: .5}, {zip:78752, value: 1.5},
    {zip:78753, value: 1.75}, {zip:78754, value: 2.35}, {zip:78756, value: 1.25}, {zip:78757, value: 1.5}, {zip:78758, value: 1.5}, {zip:78759, value: 1.75}
    ]

    for (var i =0; i < zipArray.length; i++ ){
      if (zip === zipArray[i].zip){
        return zipArray[i].value;
      }
    }
  }

  function transValue(cost){
    switch(cost){
      case (cost <= 500):
        return 2;
      break;
      case (cost <= 550):
        return 2;
      break;
      case (cost <= 500):
        return 2;
      break;
      case (cost <= 500):
        return 2;
      break;
      case (cost <= 500):
        return 2;
      break;
      case (cost <= 500):
        return 2;
      break;
    }
    if (cost <= 500){

      return 2;

    }else if (cost < 550) {

      return 1.75;

    }else if (cost < 600) {

      return 1.5;

    }else if (cost < 650) {

      return 1.25;

    }else if (cost < 700) {

      return 1;

    }else if (cost < 750) {

      return .75;

    }else if (cost < 800) {

     return .5;

    }else if (cost < 850) {

      return .25;

    }else{
      return 0
    }
  }


const homeStore = new HomeStore;
dispatcher.register(homeStore.handleActions.bind(homeStore));

export default homeStore;
