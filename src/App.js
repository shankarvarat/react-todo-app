// src/App.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "./actions/todoActions";

function App() {
  const todos = useSelector((state) => state.todos);
  console.log(...todos)
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    const text = e.target.todoText.value;
    dispatch(addTodo(text));
    e.target.todoText.value = "";
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleAddTodo}>
        <input type="text" name="todoText" placeholder="Enter a todo" required />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            onClick={() => handleToggleTodo(todo.id)}
          >
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
