import React from 'react'

function Todo() {

    const currentDate = new Date().toLocaleDateString()

  return (
    <div className="container">
        <div className="todo-app">
            <h2>TODAY</h2>
            <h4>{currentDate}</h4>
            <div className="row">
                <input type="text" placeholder='Create a new Task' />
                <button id='addBtn' >ADD</button>
            </div>
        </div>
    </div>
  )
}

export default Todo;