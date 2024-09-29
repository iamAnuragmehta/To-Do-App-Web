import React, { useState,useEffect } from 'react'
import ToDoAdd from './components/ToDoAdd'
import ToDoList from './components/ToDoList'

export default function App() {
  const [todos, settodos] = useState([])
  const [todostring, settodostring] = useState('')

  function persistdata(newtodos) {
    localStorage.setItem('todos', JSON.stringify({ todos: newtodos }))
  }

  function addtodos(newtodo) {
    const newtodolist = [...todos, newtodo]
    persistdata(newtodolist)
    settodos(newtodolist)
  }

  function deletetodo(index) {
    const newtodolist = todos.filter((todo, todoindex) => {
      return todoindex !== index
    })
    persistdata(newtodolist)
    settodos(newtodolist)
  }

  function edittodo(index) {
    
    const editedtodolist = todos[index]
    settodostring(editedtodolist)
    persistdata(editedtodolist)
    deletetodo(index)
  }

  useEffect(() => {
    if(!localStorage) {
      return
    }

    let localtodos = localStorage.getItem('todos')

    if (!localtodos) {
      return
    }

    localtodos = JSON.parse(localtodos).todos
    settodos(localtodos)
  }, [])

  return (
    <>
      <ToDoAdd 
        addtodos={addtodos} 
        todostring={todostring} 
        settodostring={settodostring}
      />
      <ToDoList 
        todo={todos} 
        deletetodo={deletetodo} 
        edittodo={edittodo}
      />
    </>
  )
}
