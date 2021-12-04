const Form = ({ newTodo, setNewTodo, todos, setTodos }) => {
  const saveTodo = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const addTodo = () => {
    for (let i = 0; i < todos.length; i++) {
      // checks to see if todo already exist
      if (todos[i].todo === newTodo) {
        alert("todo already exist");
        setNewTodo("");
        return;
      }
    }
    // prevents a blank todo to be entered
    if (newTodo === "") {
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
      <form>
        <input
          type="text"
          placeholder="Add Todo"
          onChange={(e) => setNewTodo(e.target.value)}
          value={newTodo}
        />
        <button onClick={addTodo}>Add Task</button>
      </form>
    </div>
  );
};

export default Form;
