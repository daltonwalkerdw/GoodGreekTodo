import React from "react";

const Todos = ({ todos, setTodos }) => {
  let up = -1;
  let down = 1;

  const saveTodo = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleMove = (id, direction) => {
    const position = todos.findIndex((i) => i.id === id);

    if (position === 0 && direction === up) {
      return;
    }
    if (position === todos.length - 1 && direction === down) {
      return;
    }
    const movedItem = todos[position];
    const newTodos = todos.filter((todo) => todo.id !== id);
    newTodos.splice(position + direction, 0, movedItem);
    setTodos(newTodos);

    saveTodo(newTodos);
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);

    saveTodo(newTodos);
  };
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li className="todos" key={todo.id}>
              <h2 className="item">•</h2>
              <h2 className="item">{todo.todo}</h2>
              <button className="item" onClick={() => handleMove(todo.id, up)}>
                ▲
              </button>
              <button
                className="item"
                onClick={() => handleMove(todo.id, down)}
              >
                ▼
              </button>
              <button className="item" onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
