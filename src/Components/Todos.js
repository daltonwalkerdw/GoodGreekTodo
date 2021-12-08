import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowUp,
  faCircleArrowDown,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Todos = ({ todos, setTodos }) => {
  let up = -1;
  let down = 1;

  const saveTodo = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleMove = (id, direction) => {
    // Function that handles movement of elements
    const position = todos.findIndex((i) => i.id === id);

    if (position === 0 && direction === up) {
      return // if top element, do nothing
    }
    if (position === todos.length - 1 && direction === down) {
      return; // If bottom element, do nothing
    }
    const movedItem = todos[position];
    const newTodos = todos.filter((todo) => todo.id !== id); // Removes clicked todo by index.
    newTodos.splice(position + direction, 0, movedItem); // Adds removed todo back to the list based on index and direction
    setTodos(newTodos);

    saveTodo(newTodos);
  };

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);

    saveTodo(newTodos);
  };

  return (
    <div className="todoList">
      <h1>TASK LIST</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li className="todos" key={todo.id}>
              <h2 className="item">{todo.todo}</h2>
              <FontAwesomeIcon
                className="arrows"
                onClick={() => handleMove(todo.id, down)}
                icon={faCircleArrowDown}
              />
              <FontAwesomeIcon
                className="arrows"
                onClick={() => handleMove(todo.id, up)}
                icon={faCircleArrowUp}
              />
              <FontAwesomeIcon
                className={"delete"}
                onClick={() => deleteTodo(todo.id)}
                icon={faCircleXmark}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
