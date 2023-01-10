const TodoItem = ({ todo, index, setTodos }) => {
  const { content, isCompleted } = todo;

  const delTodo = () => {
    setTodos((prevTodos) => {
      return [...prevTodos.slice(0, index), ...prevTodos.slice(index + 1)];
    });
  };

  const modTodo = () => {
    setTodos((prevTodos) => {
      return prevTodos.map((todo, i) => {
        if (i !== index) {
          return todo;
        }
        return { ...todo, isCompleted: !todo.isCompleted };
      });
    });
  };

  return (
    <li>
      <span
        onDoubleClick={modTodo}
        className={!isCompleted ? "todo-regular" : "todo-completed"}
      >
        {content}
      </span>
      <button onClick={delTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;
