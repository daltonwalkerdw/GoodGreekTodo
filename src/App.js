import {useEffect, useState} from 'react'
import './App.css';
import Form from './Components/Form';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  return (
    <div className="App">
      <h1>List App</h1>
      <Form 
      newTodo={newTodo} 
      setNewTodo={setNewTodo}
      todos={todos}
      setTodos={setTodos}
      />
    </div>
  );
}

export default App;
