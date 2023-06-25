// src/reducers/todoReducer.js

import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/todoActionTypes";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case TOGGLE_TODO:
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
      );
      return {
        ...state,
        todos: updatedTodos
      };
    case DELETE_TODO:
      const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload.id);
      return {
        ...state,
        todos: filteredTodos
      };
    default:
      return state;
  }
};

export default todoReducer;
