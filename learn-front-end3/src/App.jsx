import "./styles.css"

//return only one element. so need to wrap inside a fragment
export default function App() {
  return (
    <>
    <form className="new-iten-form">
    <div className="form-row">
      <label htmlFor="item">New Item</label>
      <input type="text" id="item" />
    </div>
    <button className="btn">Add</button>
    </form>
    <h1 className="header">Todo List</h1>
    <ul className="list">
      <li>
        <label>
          <input type="checkbox" />
          item1
        </label>
        <button className="bun  btn-danger">Delete</button>
      </li>
    </ul>
  </>
  )
}