
function TodoItem({todo, index, removeTodo, toggleComplete}) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      <span>{todo.text}</span>
      <span>{todo.description ? `${todo.description}` : ''}</span>
      <span>{todo.date ? `(${todo.date})` : ''}</span>
      <button onClick={() => toggleComplete(index)}>{todo.completed ? 'Undo' : 'Complete'}</button>
      <button onClick={() => removeTodo(index)}>Delete</button>
    </li>
  )
}

export default TodoItem