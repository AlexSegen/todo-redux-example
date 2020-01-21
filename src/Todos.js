import React from "react";
import { connect } from "react-redux";
const Todos = ({ deleteTodo, todos }) => {
  const handleDelete = id => {
    deleteTodo(id);
  };
  const todoList = todos.length ? (
    todos.map(todo => (
      <div
        style={{ padding: "7px" }}
        className="row collection-item"
        key={todo.id}
      >
        <div className="col s8">
          <span>{todo.title}</span>
        </div>
        <div className="col s4 offset-s10">
          <input
            onClick={() => handleDelete(todo.id)}
            type="button"
            className="btn btn-danger"
            value="Delete"
          />
        </div>
      </div>
    ))
  ) : (
    <p className="center">You have no todo's left</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

const mapDipatchToProps = dispatch => {
  return {
    deleteTodo: id => {
      dispatch({ type: "DELETE_TODO", payload: { id } });
    }
  };
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  mapDipatchToProps
)(Todos);
