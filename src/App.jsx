import TodoInput from "./components/Todoinput"
import TodoList from "./components/Todolist"
import { useState } from "react"
import { useEffect } from "react";


function App() {

  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  function persistTodos(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function handleAddTodo(todo) {
    const newTodoList = [...todos, todo]
    persistTodos(newTodoList);
    setTodos(newTodoList);
  };

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => todoIndex !== index);
    persistTodos(newTodoList);
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToEdit = todos[index];
    setTodoValue(valueToEdit);
    handleDeleteTodo(index);
  }

  useEffect(() => {
    if(!localStorage) {return};
    let storedTodos = localStorage.getItem('todos');
    if(!storedTodos) {
      return
    };
    setTodos(JSON.parse(storedTodos).todos);
  }, [])

  return (
    <>
      <TodoInput handleAddTodo={handleAddTodo} todoValue={todoValue} setTodoValue={setTodoValue} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} handleEditTodo={handleEditTodo}/>     
    </>
  )
}

export default App
