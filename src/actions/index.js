import { FETCH_TODOS } from "./types";

export const fetchTodos = () => async dispatch => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await res.json();
  console.log("[Index.js Actions] ", data);
  dispatch({ type: FETCH_TODOS, payload: data.slice(0, 10) });
};
