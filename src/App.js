import React, { useState, useEffect } from "react";
import "./App.css";
import TodoItem from "./TodoItem";
import db from "./firebase";
import firebase from "firebase";
import CreateIcon from "@material-ui/icons/Create";

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  const addtodo = (e) => {
    e.preventDefault();

    db.collection("todos").add({
      todos: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      isCheked: true,
    });
    setInput("");
  };

  useEffect(() => {
    db.collection("todos")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setTodo(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            todos: doc.data().todos,
            isChecked: doc.data().isCheked,
          }))
        );
      });
  }, []);

  return (
    <div className="app">
      <div className="app__container">
        <h1>Todolist-Skuberg</h1>
        <form>
          <div className="input__f">
            <CreateIcon />
            <input
              placeholder="Write Todo"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="add__button"
              onClick={addtodo}
              type="submit"
              disabled={!input}
            >
              <p>Enter</p>
            </button>
          </div>
        </form>

        <div className="item__container">
          <>
            {todo.map((todos) => (
              <TodoItem todos={todos} />
            ))}
          </>
        </div>
      </div>
    </div>
  );
}

export default App;
