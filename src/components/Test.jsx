import React, { useState } from "react";
import "./Title.css";
const Test = () => {
  const [count, setCount] = useState(0);

  const [inputValue, setInputValue] = useState("");

  const [todoInputValue, setTodoInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count > 0 ? count - 1 : count);
  };

  const addTodo = () => {
    const tempTodo = [...todoList];
    tempTodo.push(todoInputValue);
    setTodoList(tempTodo);
  };

  
  return (
    <div>
      <div>
        <h1>Count</h1>
        <button onClick={increment}>Increment</button>
        <h1>{count}</h1>
        <button onClick={decrement}>Decrement</button>
      </div>

      <div>
        <h1>Input</h1>
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <p>output: {inputValue} </p>
      </div>

      <div>
        <h1>Todo</h1>
        <input
          value={todoInputValue}
          onChange={(e) => setTodoInputValue(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
        <h3>Todos</h3>
        <ul>
          {todoList.map((value, index) => (
            <li>{value}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1>Hello, world</h1>
        <h2>
          It is {setInterval(() => new Date().toLocaleTimeString(), 1000)}
        </h2>
      </div>
    </div>
  );
};

export default Test;
