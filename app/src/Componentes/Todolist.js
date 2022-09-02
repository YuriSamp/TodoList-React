import React from "react";
import { TodoItem } from "./TodoItem";

export const Todolist = ({todos, setTodos}) => {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
        setTodos={setTodos}
         text={todo.text}
         todo={todo}
         todos={todos}
         key={todo.id}/>
      ))}
    </div>
  )
}