import React, { useState } from 'react';

const TodoForm = (props) => {
  return <form className="todo-form" >Please?</form>
}

const TodoList = (props) => {
  return <div className="todo-list" >Anything?</div>
}

const Todo = (props) => {
  return <div className="todo">
    <p>I'm frustrated</p>
    <TodoForm />
    <TodoList />
  </div>
}

export default Todo;