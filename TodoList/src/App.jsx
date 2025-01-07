import React from 'react'
import { TodoTitle } from './TodoTitle'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { TodoAdd } from './TodoAdd'
import './App.css'

function App() {
  const toDos = [
    {text: 'Buy groceries', completed: false },
    {text: 'Walk the dog', completed: false },
    {text: 'Do the laundry', completed: false },
  ]
  const [searchValue, setSearchValue] = React.useState('')
  const [todos, setTodos] = React.useState(toDos)
  const completed = todos.filter(todo => todo.completed).length
  const incompleted = todos.length

  const filterTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })


  return (
    <>
    <TodoTitle 
    completed={completed} 
    incompleted={incompleted}
    />
    <TodoSearch 
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    />
    <TodoList>
      {filterTodos.map((todo, index) => (
        <TodoItem 
        key={index} 
        text={todo.text} 
        completed={todo.completed} />
      ))}
    </TodoList>
    <TodoAdd />
    </>
  )
}

export default App
