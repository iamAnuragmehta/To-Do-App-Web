import React from 'react'

export default function ToDoCard(props) {
    const {index, p, deletetodo, edittodo} = props

    return (
        <div className='todocard' draggable>
            <p> {p} </p>
            <div className='buttonsheet'>
                <button onClick={() => {
                    let x = document.getElementById('addtodo')
                    x.focus()
                    edittodo(index)
                }}>
                    <span class="material-symbols-outlined">
                        edit_square
                    </span>
                </button>
                <button onClick={() => {
                    deletetodo(index)
                }}>
                    <span class="material-symbols-outlined">
                        delete
                    </span>
                </button>
                
            </div>
        </div>
    )
}
