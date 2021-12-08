import { useEffect, useState } from "react";
import "./App.scss";
import Form from "./Components/Form";
import Header from "./Components/Header";
import Todos from "./Components/Todos";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    // Grabs storage and sets it to state.
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  return (
    <div className="background">
      <div className="centered">
        <Header />
        <div className="formContainer">
          <Form
            newTodo={newTodo}
            setNewTodo={setNewTodo}
            todos={todos}
            setTodos={setTodos}
          />
          <Todos todos={todos} setTodos={setTodos} />
        </div>
      </div>
      <p className="copyRight">
        COPYRIGHT GOOD GREEK MOVING & STORAGE. ALL RIGHTS RESERVED.
      </p>
    </div>
  );
}

export default App;
