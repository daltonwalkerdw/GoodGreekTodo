import React from "react";

const Todos = ({ todos, setTodos }) => {
  let up = -1;
  let down = 1;

  const saveTodo = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleMove = (id, direction) => {
    const position = todos.findIndex((i) => i.id === id);
    if(position == 0 && direction == up){
        return
    } else if(position == todos.length - 1 && direction == down) {
        return
    }
    const movedItem = todos[position];
    let newTodos = todos.filter((todo) => todo.id !== id);
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
      {todos.map((todo) => {
        return (
          <div className="todos" key={todo.id}>
            <p>•</p>
            <h2>{todo.todo}</h2>
            <button onClick={() => handleMove(todo.id, up)}>▲</button>
            <button onClick={() => handleMove(todo.id, down)}>▼</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
