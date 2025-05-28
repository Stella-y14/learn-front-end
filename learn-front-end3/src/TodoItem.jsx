export function TodoItem({ completed, id, title, toggleTodo, deleteTodo, content }) {
    return (
        <li>
            {/* <label>
            <input type="checkbox" checked={completed}
            onChange={e => toggleTodo(id, e.target.checked)} 
            />
            {title}
            </label> */}
            <p>{content}</p>
            <button 
            onClick={() => deleteTodo(id)} 
            className="btn btn-danger"
            >
            Delete
            </button>
        </li>
    )
}