import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowUp,
  faCircleArrowDown,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const Todos = ({ todos, setTodos }) => {
  const up = -1;
  const down = 1;

  const saveTodo = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleMoveTodo = (id, direction) => {
    const todoPosition = todos.findIndex((todo) => todo.id === id);

    if (
      (todoPosition === 0 && direction === up) ||
      (todoPosition === todos.length - 1 && direction === down)
    ) {
      return;
    }

    const movedTodo = todos[todoPosition];
    const sortedTodos = todos.filter((todo) => todo.id !== id); // Removes clicked todo by index.
    sortedTodos.splice(todoPosition + direction, 0, movedTodo); // Adds removed todo back to the list based on index and direction
    setTodos(sortedTodos);
    saveTodo(sortedTodos);
  };

  const deleteTodo = (id) => {
    let filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
    saveTodo(filteredTodos);
  };

  return (
    <div className="todoList">
      <h1>TASK LIST</h1>
      <ul>
        {todos.map(({ todo, id }) => {
          return (
            <li className="todos" key={id}>
              <h2 className="item">{todo}</h2>
              <FontAwesomeIcon
                className="arrows"
                onClick={() => handleMoveTodo(id, down)}
                icon={faCircleArrowDown}
              />
              <FontAwesomeIcon
                className="arrows"
                onClick={() => handleMoveTodo(id, up)}
                icon={faCircleArrowUp}
              />
              <FontAwesomeIcon
                className={"delete"}
                onClick={() => deleteTodo(id)}
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
