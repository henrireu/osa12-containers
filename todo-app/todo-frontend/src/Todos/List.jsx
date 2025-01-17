import React from 'react'

import ToDo from './Todo'

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map((todo, i) => (
        <div key={i} >
          <ToDo todo={todo} onClickDelete={onClickDelete} onClickComplete={onClickComplete} />
          <hr />
        </div>
      ))}
    </>
  )
}

export default TodoList
