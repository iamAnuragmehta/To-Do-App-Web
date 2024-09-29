import React from 'react'

export default function ToDoAdd(props) {
  const { addtodos, todostring, settodostring } = props

  return (
    <header className='input'>
      <input className='input' id='addtodo' value={todostring} placeholder='Add ToDo.....' 
      onChange={(e) => {
        settodostring(e.target.value)
      }}/>
      <button className='addbutton' onClick={() => {
        if (todostring !== '') {
          addtodos(todostring)
          settodostring('')
        }
      }}>Add</button>
    </header>
  )
}
