function TodoList({ todos, removeTodo, toggleComplete }) {

    return (
        <ul>
            {todos.map((todo, index) => ( //perform it for each todo

                //line through when it completed
                <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>

                    <span>{todo.text}</span>
                    <span>{todo.description ? `${todo.description}` : ''}</span>
                    <span>{todo.date ? `${todo.date}` : ''}</span>
                    <span style={{textDecoration:"none"}}>
                        <button id="com-btn" onClick={() => toggleComplete(index)}>{todo.completed ? 'Undo' : 'Complete'}</button>
                        <button onClick={() => removeTodo(index)}>Delete</button>
                    </span>
                </li>
            ))}
        </ul>
    )
}

export default TodoList