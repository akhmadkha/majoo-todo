import React from 'react'
import CreateTodo from '../features/todo/create'

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center">
        <h1 className="text-5xl font-bold my-10">Majoo todo 🚀</h1>
        <CreateTodo/>
      </div>
  )
}
