import React, { useContext } from 'react'
import TodosContext from '../context'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'


export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext)
  const title = state.todos.length > 0 ? `${state.todos.length} Todos` : "Nothing to do!";
  
  return (
    <div className="container mx-auto max-w-md text-center font-mono">
      <h1 className="text-4xl">{title}</h1>
      <ul className="list-reset text-white p-0">
        {state.todos.map(todo => (
        <li key={todo.id}
          className="flex items-center bg-yellow-600 border-black border-dashed border-2 my-2 py-4"
        >
          <span
          onDoubleClick={() => dispatch({ type: "TOGGLE_TODO", payload: todo })}
          className={`flex-1 m1-12 cursor-pointer ${todo.complete && "line-through text-gray-500"}`}>{todo.text}</span>
          <button className="p-1">
            <FontAwesomeIcon icon={faEdit} />
          </button>
          <button 
          onClick={() => dispatch({
            type: "REMOVE_TODO", payload: todo
          })}
          className="p-1">
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
        ))}
      </ul>
    </div>
  )

}