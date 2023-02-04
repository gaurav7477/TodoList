import React, { useState } from 'react'
import "./App.css";
import Header from './componant/Header';
import Form from './componant/Form';
import TodoListItem from './componant/TodoListItem';

const App = () => {


  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo,setEditTodo] = useState(null);

  return (
    <div className='container'>
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form input={input}
            setInput={setInput}
            todos={todos}
            setTodos={setTodos}
            editTodo= {editTodo}
            setEditTodo = {setEditTodo}
          />

        </div>
        <div>
          <TodoListItem
            todos={todos}
            setTodos={setTodos}
            setEditTodo = {setEditTodo}
          />

        </div>
      </div>
    </div>
  )
}

export default App; 