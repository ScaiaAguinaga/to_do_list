# To-Do List

This project is a straightforward to-do list application developed with HTML, CSS, JavaScript, and React. It serves as a practical tool for efficiently organizing and monitoring your daily tasks.

## Features

- Allows you to add tasks.
- Allows you to remove tasks.
- Allows you to mark tasks for completion.
- Stores data locally on your browser

## How to Use

1. **Task Input:** Start by entering the name of your task in the input field.
2. **Add Task:** Click the "Add" button to add your task to the list.
3. **Task Navigation:** Scroll through your list of tasks displayed below.
4. **Task Management:** To manage your tasks, use the following options:
   - **Mark for Completion:** Check the box next to a task to mark it as completed.
   - **Delete Task:** Click the "Delete" or "Remove" button to delete a task from the list.

## Program Logic

- **index.html:** This HTML file serves as the entry point to the application. It defines the webpage's structure and links to the main JavaScript file.
- **App.jsx:** The main React component responsible for managing the to-do list. It handles task addition, deletion, and completion status, along with local storage for data persistence.
- **NewTodoForm.jsx:** This component manages the form used to add new tasks. It captures user input and triggers the `onSubmit` function to add tasks.
- **TodoList.jsx:** This component renders the list of tasks, mapping over the task data and displaying each task using the `TodoItem` component. It also handles the display of a message when there are no tasks.
- **TodoItem.jsx:** Represents an individual task item. It provides a checkbox for marking tasks as complete and a delete button for task removal. It communicates with the `toggleTodo` and `deleteTodo` functions defined in `App.jsx`.

## Dependencies

This project uses the following technologies:

- HTML
- CSS
- JavaScript
- React
- Node.js

## How to Run

To run this application you will need both Node.js and npm installed.

Clone this repository to your local machine:
`git clone https://github.com/ScaiaAguinaga/ToDoListWebApp`

Navigate to the project directory:
`cd ToDoListWebApp`

Install the required dependencies:
`npm install`

Start the development server:
`npm run dev`


## Credits

This project was created by [Isaac Aguinaga](https://github.com/ScaiaAguinaga).

## License

This project is open-source and available under the [MIT License](LICENSE).
