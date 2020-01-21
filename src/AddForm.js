import React, { useState } from "react";
import { connect } from "react-redux";
const AddForm = ({ addTodo }) => {
  const [content, setContent] = useState("");
  const handleSubmit = e => {
    e.preventDefault();
    addTodo(content);
    e.target.reset();
  };

  return (
    <div>
      <form onSubmit={e => handleSubmit(e)}>
        <label>Add new todo:</label>
        <input type="text" onChange={e => setContent(e.target.value)} />
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: content => {
      dispatch({ type: "ADD_TODO", payload: { content } });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AddForm);
