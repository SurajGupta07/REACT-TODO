import './App.css';
import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header />
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList todos={todos} setTodos={setTodos} inputText={inputText} />
    </div>
  );
}

export default App;
