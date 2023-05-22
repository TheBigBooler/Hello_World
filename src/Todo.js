import React, { useState } from 'react';

const TodoForm = (props) => {
   const [newTodo, setNewTodo] = useState("");

  return <form className="todo-form" onSubmit={(event) => { event.preventDefault() }}>
    <h2>Let's knock out some chores!</h2>
    <input type='text' value= { newTodo } onChange={(event) => {setNewTodo(event.target.value)}}>What needs doing?</input>
    <button type="submit">Add to list</button>
  </form>
}

const TodoList = (props) => {
  return <div className="todo-list" >
    <p>Why is nothing showing up</p>
  </div>
}

const Todo = (props) => {
  return <div className="todo">
    <TodoForm />
    <TodoList />
  </div>
}

export default Todo;