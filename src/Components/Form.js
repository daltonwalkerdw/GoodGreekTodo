const Form = ({ newTodo, setNewTodo, todos, setTodos }) => {
  const saveTodo = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const addTodo = (e) => {
    e.preventDefault();
    for (let i = 0; i < todos.length; i++) {
      // checks to see if todo already exist
      if (todos[i].todo === newTodo) {
        alert("todo already exist");
        setNewTodo("");
        return;
      }
    }
    if (newTodo === "") {
      // prevents a blank todo to be entered
      alert("Please Enter A Todo");
    }
    if (newTodo.trim()) {
      let newTodos = [...todos, { todo: newTodo.trim(), id: Date.now() }];
      setTodos(newTodos);
      setNewTodo("");
      saveTodo(newTodos);
    }
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
