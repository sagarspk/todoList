import React, { useState} from 'react';
import './App.css';

function App() {

  const [list,setList] = useState([]);
  const [input,setInput] = useState("");

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo:todo
    };
  
    //add the todo to the list
    setList([...list,newTodo]);

    // clear the input field
    setInput("");

    
  };

  const delTodo = (id) =>{
    //Filter out todo with the id
    const newList = list.filter((todo) => todo.id !== id );

    setList(newList);
  };

  return (
    <div className='main_div'>
      <div className='center_div'>
        
        <h1>Todo List</h1>
        <div className='input_div'>
        <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className='input_'
        />
        <button onClick={()=> addTodo(input)} className='input_'> Add </button>
        </div>
        <ul>
        {list.map((todo)=>(
          <li key={todo.id}>
            {todo.todo}
            <button onClick={()=> delTodo(todo.id)} className='input_'> &times; </button>
          </li>
          ))}
       </ul>
      </div>
    </div>
  );
}

export default App