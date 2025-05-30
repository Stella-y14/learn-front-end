import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("") // [value, function]

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }

    return (
    <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <textarea 
                value={newItem} 
                onChange={e => setNewItem(e.target.value)} 
                rows={4}
                type="text" id="item" 
        />
        </div>
        <button className="btn">Add</button>
    </form>
    )
}