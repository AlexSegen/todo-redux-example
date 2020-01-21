import { FETCH_TODOS, ADD_TODO, DELETE_TODO } from "../actions/types";
const initState = {
  todos: [],
  loading: true
};
export const rootReducer = (state = initState, action) => {
  console.log("[rootReducer.js] ", action);
  switch (action.type) {
    case ADD_TODO:
      let newTodos = [
        ...state.todos,
        { id: state.todos.length + 1, content: action.payload.content }
      ];
      return {
        ...state,
        todos: newTodos
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      };
    case FETCH_TODOS:
      return {
        ...state,
        todos: action.payload
      };

    case "LOADING_TODOS": {
      return {
        ...state,
        loading: action.payload
      };
    }

    default:
      return state;
  }
};

export const getTodos = state => state.todos;
