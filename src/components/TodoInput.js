import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, addTodoTest } from "../actions";

const TodoInput = () => {
  //local state => user input  => create a todo object  => add the todo object to array of todos
  //dispatch addTodo to reducers => reducer will update the state => the components will be impacted the global state/redux will be re-rendering
  const [userInput, setUserInput] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    if (!userInput.trim()) {
      setUserInput("");
      return;
    }

    addTodo(dispatch)(userInput);
    // dispatch(addTodoTest(userInput));
    setUserInput("");
  };

  return (
    <div>
      <input
        type="text"
        value={userInput}
        onChange={(e) => {
          setUserInput(e.target.value);
        }}
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
