import React from "react";

import Todo from "../components/Todo";
import * as TodoActions from "../actions/TodoActions";
import TodoStore from "../stores/TodoStore";

var zip = null;
export default class Featured extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll(),
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll(),
    });
  }


  reloadTodos() {
    if (zip.length != 5 && typeof zip != "number"){
      alert("invalid zip code entry");
    }else{
      TodoActions.reloadTodos(zip);
    }

  }

  handleChange(e){
    zip = e.target.value;

  }

  render() {
    const { todos } = this.state;

    const TodoComponents = todos.map((todo) => {
        return <Todo key={todo.id} {...todo}/>;
    });

    return (
      <div>
        <form onSubmit={this.reloadTodos.bind(this)} >
          <button>Zip Code</button>
          <input onChange={this.handleChange.bind(this)}/>
        </form>
        <h1>Personal Property Predictor</h1>
        <ul>{TodoComponents}</ul>
      </div>
    );
  }
}
