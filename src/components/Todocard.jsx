import React from 'react'

export default function Todocard(props) {
    const {children, handleDeleteTodo, handleEditTodo, index} = props
  return (
    <div>
        <li className='list-items'>
            {children} 
            <button className='action edit' onClick={() => handleEditTodo(index)}>
                <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className='action delete' onClick={() => handleDeleteTodo(index)}>
                <i class="fa-solid fa-trash"></i>
            </button>
        </li>

    </div>
  )
}
