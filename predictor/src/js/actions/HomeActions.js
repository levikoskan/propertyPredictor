import dispatcher from "../dispatcher";


export function getScore(zip) {

  $.ajax({
    method: 'GET',
    url: 'https://data.austintexas.gov/resource/hcnj-rei3.json',
    data: {
      zip_code: zip


    },
    dataType: 'json'
  })
  .done(function(data) {

    if (data[0] === undefined){
      alert("no zip in data base that matches that record");
      // return something about unable to locate the zip due to incomplete database
    }else{

    var historyOfHome = data[0].change_in_median_home_value_2000_2012;
    var transCost = data[0].average_monthly_transportation_cost;
      var homeScore = "home score is "+ (homeValue(historyOfHome)).toFixed(2);
      var transScore = "trans score is "+ transValue(transCost);
      var crimeScore = "crime score is "+ crimeValue(zip);
      var score = (homeValue(historyOfHome) + transValue(transCost)+ crimeValue(zip)).toFixed(2);

      dispatcher.dispatch({
        type: "RECEIVE_SCORE",
        totalScore: score
        // homeValue: homeScore,
        // transValue: transScore,
        // crimeValue: crimeScore
        });
    }
  })
  .fail(function(jqXHR, textStatus) {
    console.log('Request failed: ' + textStatus);
  });
};
// created the function to determin our home value score
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
