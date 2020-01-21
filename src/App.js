import React, { useEffect } from "react";
import Todos from "./Todos";
import AddForm from "./AddForm";
import Loader from "./loader";
import { connect } from "react-redux";

function App({ todos, fetchTodos, loading }) {
  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);
  console.log(loading);
  return (
    <div className="todo-app container">
      <h1 className="center blue-text">Todo's</h1>
      {loading && <Loader style={{ marginLeft: "30em" }} />}
      <Todos todos={todos} />
      <AddForm />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.todos,
    loading: state.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTodos: () => {
      fetch("https://jsonplaceholder.typicode.com/todos")
        .then(res => res.json())
        .then(data => {
          dispatch({ type: "FETCH_TODOS", payload: data.slice(0, 10) });
          dispatch({ type: "LOADING_TODOS", payload: false });
        });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
