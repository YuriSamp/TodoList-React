import React from "react";
import { AiOutlineCheckCircle, AiFillDelete } from "react-icons/ai";


export const TodoItem = ({text, todo, setTodos, todos}) => {

  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id))
  }

  const completeHandler = () => {
    setTodos(todos.map(item => {
      if(item.id === todo.id) {
        return{
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
  }
  
 
  return <div className="Todo-Item">
    <button className="Button-1" onClick={completeHandler}><AiOutlineCheckCircle /></button>
    <div className="todo-desk">
      <div className={`texto ${todo.completed ? "completed" : ""}`}>
        <p>{text}</p>
      </div>
    </div>
      <button onClick={deleteHandler} className="Button-2"> <AiFillDelete /> </button>
  </div>
}
