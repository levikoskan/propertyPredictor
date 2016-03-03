import dispatcher from "../dispatcher";


export function getApi(zip) {

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
      dispatcher.dispatch({
        type: "RECEIVE_DATA",
          api: data,
          zip: zip
        });
    }
  })
  .fail(function(jqXHR, textStatus) {
    console.log('Request failed: ' + textStatus);
  });
};


