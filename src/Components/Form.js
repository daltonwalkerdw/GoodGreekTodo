const Form = ({ newTodo, setNewTodo, todos, setTodos }) => {
  const saveTodo = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const isTodoBlank = () => {
    // Prevents a blank todo from being created.
    if (newTodo === "") {
      alert("Please Enter A Todo");
    }
  };

  const trimTodo = () => {
    // Trims any blank space from the input string.
    for (let i = 0; i < todos.length; i++) {
      // Checks if new todo exist, if true prevents anything from happening
      if (todos[i].todo === newTodo) {
        alert("todo already exist");
        setNewTodo("");
        console.log(todos);
        return;
      }
    }
    if (newTodo.trim()) {
      let newTodos = [...todos, { todo: newTodo.trim(), id: Date.now() }];
      setTodos(newTodos);
      setNewTodo("");
      saveTodo(newTodos);
    }
  };

  const addTodo = (e) => {
    e.preventDefault();
    isTodoBlank();
    trimTodo();
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
