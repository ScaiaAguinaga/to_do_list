import { useEffect, useState } from "react"
import { NewTodoForm } from "./NewTodoForm"
import { TodoList } from "./TodoList"
import "./styles.css"

export default function App() {
  // State to manage the list of todos
  const [todos, setTodos] = useState(() => {
    // Initialize todos from local storage or an empty array
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    
    return JSON.parse(localValue)
  })

  // Save todos to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  // Function to add a new todo
  function addTodo(title) {
    setTodos(currentTodos => {
      return [...currentTodos, { id: crypto.randomUUID(), title, completed: false }]
    })
  }

  // Function to toggle the completion status of a todo
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

  // Function to delete a todo
  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
      {/* Render the form for adding new todos */}
      <NewTodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      {/* Render the list of todos */}
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}