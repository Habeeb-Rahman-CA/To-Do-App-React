import React, { useState } from 'react'

function TodoInput({addTodo}) {
    //input field
    const [input, setInput] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    //handle submit btn
    const handleSubmit = (submit) => {
        submit.preventDefault() //prevent the submission
        if (input.trim()) { //check input is not blank
            addTodo({ // 'addTodo' add new todo
                text: input,
                description,
                date,
                completed: false //new todo are not completed
            })
            //then it clear the input
            setInput('')
            setDescription('')
            setDate('')
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={input} onChange={(change) => setInput(change.target.value)} placeholder='Create new Task' />
            <input type="text" value={description} onChange={(change) => setDescription(change.target.value)} placeholder='Description' />
            <input type="date" value={date} onChange={(change) => setDate(change.target.value)} />
            <button type='submit'>ADD</button>
        </form>
    )
}

export default TodoInput