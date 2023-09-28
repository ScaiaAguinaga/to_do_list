import { useState } from "react"
import PropTypes from 'prop-types'

// PropTypes for NewTodoForm component
NewTodoForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export function NewTodoForm({ onSubmit }) {
    // State to manage the input field for new todos
    const [newItem, setNewItem] = useState("")

    // Function to handle form submission
    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        // Call the onSubmit function with the new todo title
        onSubmit(newItem)

        // Clear the input field after submission
        setNewItem("")
    }

    return (
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
            <label htmlFor="item">New Item</label>
            <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
        </div>
        <button className="btn">add</button>
      </form>
    )
}