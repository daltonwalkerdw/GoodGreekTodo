import { useState } from "react";

const Form = ({ newTodo, setNewTodo, todos, setTodos }) => {
  const saveTodo = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const addTodo = () => {
    if (newTodo.trim()) {
      let newTodos = [...todos, { todo: newTodo.trim(), id: Date.now() }];
      setTodos(newTodos);
      setNewTodo("");
      saveTodo(newTodos);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add Todo"
        onChange={(e) => setNewTodo(e.target.value)}
        value={newTodo}
      />
      <button onClick={addTodo}>Add Task</button>
    </div>
  );
};

export default Form;
