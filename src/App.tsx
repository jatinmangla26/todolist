import { useState } from "react";
import "./App.css"
import InputField from "./Components/InputField";
import { Todo } from "./models";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todo);

  return (
    <div className="App">
      <span className="heading"> Todo List</span>
      <InputField todo={todo} setTodo={setTodo}  ></InputField>
    </div>
  );
}

export default App;
