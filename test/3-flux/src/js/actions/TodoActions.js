import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos(zip) {
  // axios("http://someurl.com/somedataendpoint").then((data) => {
  //   console.log("got the data!", data);
  // })
  console.log(zip);
  $.ajax({
    method: 'GET',
    url: 'https://data.austintexas.gov/resource/hcnj-rei3.json',
    data: {
      zip_code: zip


    },
    dataType: 'json'
  })
  .done(function(data) {
    const diffOfHomeValue = change_in_median_home_value_2000_2012;
    const transportationCost = average_monthly_transportation_cost;
    var 78617 = 10;


    if (data === []){
      // return something about unable to locate the zip due to incomplete database
    }else{
    var result = data[0].unemployment
    console.log(result);
    }
  })
  .fail(function(jqXHR, textStatus) {
    console.log('Request failed: ' + textStatus);
  });




  dispatcher.dispatch({type: "FETCH_TODOS"});
  setTimeout(() => {
    dispatcher.dispatch({type: "RECEIVE_TODOS", todos: [
      {
        id: 8484848484,
        text: "Go Shopping Again",
        complete: false
      },
      {
        id: 6262627272,
        text: "Hug Wife",
        complete: true
      },
    ]});
  }, 1000);
}
