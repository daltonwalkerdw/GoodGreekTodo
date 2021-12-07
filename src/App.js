import { useEffect, useState } from "react";
import "./App.scss";
import Form from "./Components/Form";
import Header from "./Components/Header";
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
      <p>Good Greek Moving & Storage All Rights Reserved</p>
    </div>
  );
}

export default App;
