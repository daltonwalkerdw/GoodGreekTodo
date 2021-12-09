import { useState } from "react";

const Form = ({ todos, setTodos}) => {
  const [newTodo, setNewTodo] = useState("");

  const saveTodo = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const addTodo = (e) => {
    e.preventDefault();
    if (isTodoBlank() === false) {
      if (doesTodoAlreadyExist() === false) {
        let newTodos = [...todos, { todo: newTodo.trim(), id: Date.now() }];
        setTodos(newTodos);
        setNewTodo("");
        saveTodo(newTodos);
      }
    }
  };

  const isTodoBlank = () => {
    let isBlank = false;
    if (newTodo === "") {
      alert("Please Enter A Todo");
      isBlank = true;
    }
    return isBlank;
  };

  const doesTodoAlreadyExist = () => {
    let doesExist = false;
    todos.forEach(todo => {
      if (todo.todo === newTodo) {
        alert("todo already exist");
        setNewTodo("");
        console.log(todos);
        doesExist = true;
      }
    })
    return doesExist;
  };

  return (
    <div className="form">
      <h1>LIST APP</h1>
      <form>
        <input
          type="text"
          placeholder="Add Todo"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button onClick={addTodo}>create task</button>
      </form>
    </div>
  );
};

export default Form;
