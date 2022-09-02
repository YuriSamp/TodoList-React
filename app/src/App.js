import { useState } from 'react';
import { Header } from './Componentes/Header';
import { Modal } from './Componentes/Modal';
import { Todolist } from './Componentes/Todolist';

function App() {

  const [inputText,setInputText] = useState("");
  const [todos,setTodos ] = useState([])

  return (
    <>
      <Header/>
      <Modal
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos= {setTodos}/>
      <Todolist
      todos={todos}
      setTodos={setTodos}
      />
    </>
  );
}

export default App;
