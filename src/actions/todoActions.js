// src/actions/todoActions.js

import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./todoActionTypes";

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: {
      text
    }
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: {
      id
    }
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  };
};
