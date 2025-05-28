import { useState } from "react"
import "./styles.css"

//return only one element. so need to wrap inside a fragment
export default function App() {
  const [newItem, setNewItem] = useState("") // [value, function]
  const [todos, setTodos] = useState([])
  
  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos, 
      { id: crypto.randomUUID(), 
        title: newItem, completed:false },
    ]
  })
}

  console.log(todos)

  return (
    <>
    <form onSubmit={handleSubmit} className="new-iten-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input 
        value={newItem} 
        onChange={e => setNewItem(e.target.value)} 
        type="text" id="item" 
      />
    </div>
    <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="list">
      {todos.map(todo =>  {
        return (
          <li>
            <label>
              <input type="checkbox" checked={todo.completed} />
              {todo.title}
            </label>
            <button className="bun  btn-danger">Delete</button>
          </li>
        )
      })} 

    </ul>
  </>
  )
}