import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {

  //save the todo
  const savedTodos = JSON.parse(localStorage.getItem('todos')) || []
  const [todos, setTodos] = useState(savedTodos)

  const saveToLocalStorage = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos)) //save it to the local storage
  }

  //add new todo
  const addTodo = (todo) => {
    const updateTodos = [...todos, todo]
    setTodos(updateTodos)
    saveToLocalStorage(updateTodos)
  }

  //remove todo by its index
  const removeTodo = (index) => {
    const updateTodos = todos.filter((_, i) => i !== index)
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
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
    </div>
  )
}

export default App