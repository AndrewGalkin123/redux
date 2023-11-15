import './App.css';
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: new Date().toISOString(),
          text,
          completed: false,
        },
      ]);
    }
    setText('');
  };

  const toggleTodoCompleted = (todoId) => { 
    setTodos(
      todos.map(
        todo => {
          if(todo.id !== todoId) return todo
          return {
            ...todo,
            completed: !todo.completed
          }
        
        }
      )
    )
  }

  const removeTodo = (todoId) => { 
    setTodos(todos.filter(todo => todo.id !== todoId))
  }

  return (
    <div className="App">
      <label>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </label>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} onChange={() => toggleTodoCompleted(todo.id)}/>
            <span>{todo.text}</span>
            <span onClick={() => removeTodo(todo.id)} className='delete'>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
