import { useState } from "react"
import "./styles.css"
import { NewTodoForm } from "./NewTodoForm"
import { Todolist } from "./TodoList"

//return only one element. so need to wrap inside a fragment
export default function App() {

  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos((currentTodos) => {
    return [
      ...currentTodos, 
      { id: crypto.randomUUID(), 
      title, completed:false },
    ]
    })
  }

function toggleTodo(id, completed) {
  setTodos(currentTodos => {
    return currentTodos.map(todo => {
      if (todo.id === id) {
      return { ...todo, completed }
      }
      return todo
    })
  })
}

function deleteTodo(id) {
  setTodos(currentTodos => {
    return currentTodos.filter(todo => todo.id !== id)
  })
}

  return (
    <>
    <NewTodoForm onSubmit={addTodo}/>
    <h1 className="header">Todo List</h1>
    <Todolist todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}