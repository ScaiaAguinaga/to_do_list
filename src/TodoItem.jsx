import PropTypes from 'prop-types'

// PropTypes for TodoItem component
TodoItem.propTypes = {
    completed: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
};

export default TodoItem;

export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
     return (
     <li>
         <label>
             {/* Checkbox to toggle the completion status */}
             <input type="checkbox" checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
             {title}
         </label>
         {/* Button to delete the todo */}
         <button onClick={() => deleteTodo(id)} className="btn btn-danger">Delete</button>
     </li>
     )
}