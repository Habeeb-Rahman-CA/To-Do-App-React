import React, { useState } from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function App() {

  const savedTodos = JSON.parse(localStorage.getItem('todos')) || [] //initialize the todo from local storage
  const [todos, setTodos] = useState(savedTodos) //to hold the list

  const saveToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos)) //save it to the local storage
  }

  //add new todo
  const addTodo = (todo) => {
    const updateTodos = [...todos, todo]
    setTodos(updateTodos) //adding to the existing list
    saveToLocalStorage(updateTodos)
  }

  //remove todo by its index
  const removeTodo = (index) => {
    const updateTodos = todos.filter((_, i) => i !== index) //filter the todo at given index
    setTodos(updateTodos)
    saveToLocalStorage(updateTodos)
  }

  //status of a todo
  const toggleComplete = (index) => {
    const updateTodos = todos.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo) //completed status to the todo
    setTodos(updateTodos)
    saveToLocalStorage(updateTodos) 
  }

  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
    </div>
  )
}

export default App