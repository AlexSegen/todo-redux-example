export const ADD_TODO = "ADD_TODO";
export const FETCH_TODOS = "FETCH_TODOS";
export const DELETE_TODO = "DELETE_TODO";

export function fetchTodos(todos) {
  return {
    type: FETCH_TODOS,
    todos
  };
}

export function addTodo() {
  return {
    type: ADD_TODO
  };
}

export function deleteTodo() {
  return {
    type: DELETE_TODO
  };
}
