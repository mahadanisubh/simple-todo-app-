import { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem("todos"));
    if (data){
      setTodos(data);
    }
  },[]);

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  const addTodo = (todoText) => {
    if (todoText.trim() === "") return;

    setTodos([...todos, { id: Date.now(), text: todoText }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };


  console.log(todos);

  return (
    <div style={styles.container}>
      <h2>Todo App</h2>
  
      <Card addTodo= {addTodo} />

      {todos.length === 0 ? (
        <p>No todos</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} style={styles.todo}>
              {todo.text}
              <button onClick={() => deleteTodo(todo.id)}>Delete karo</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    textAlign: "center",
  },
  todo: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
  },
};

export default App;
