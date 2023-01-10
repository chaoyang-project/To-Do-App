import TodoItem from "./TodoItem";

const TodoList = ({ todos, setTodos }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <TodoItem
            todo={todo}
            index={index}
            setTodos={setTodos}
            key={`${todo.content}-${index}`}
          />
        );
      })}
    </ul>
  );
};

export default TodoList;
