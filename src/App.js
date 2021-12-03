import { useEffect, useState } from "react";
import "./App.css";
import Form from "./Components/Form";
import Todos from "./Components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  return (
    <div className="centered">
      <h1>List App</h1>
      <Form
        newTodo={newTodo}
        setNewTodo={setNewTodo}
        todos={todos}
        setTodos={setTodos}
      />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
