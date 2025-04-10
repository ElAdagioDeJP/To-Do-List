import React from 'react'
import { TodoTitle } from './components/TodoTitle'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { TodoAdd } from './components/TodoAdd'
import { TodoLoading } from './components/TodoLoading'
import './styles/App.css' // Cambié la ruta para reflejar la nueva ubicación del archivo CSS

function useLocalStorage(itemName, initialValue) {
  const [item, setItems] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)


  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageTodos = localStorage.getItem(itemName)
        let parsedItem;
        if (!localStorageTodos) {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue
        } else {
          parsedItem = JSON.parse(localStorageTodos)
          setItems(parsedItem)
        }
        setLoading(false)
      }
      catch (error) { 
        setLoading(false)
        setError(true)
      }
    }, 2000)
  }, [])


  const saveItems = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItems(newItem)
  }

  return { 
    item, 
    saveItems,
    loading,
    error,   }
}

function App() {
  const [searchValue, setSearchValue] = React.useState('')
  const { item: todos, saveItems: saveTodos , loading, error } = useLocalStorage('TODOS_V1', [])
  const completed = todos.filter(todo => todo.completed).length
  const incompleted = todos.length

  const filterTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveTodos(newTodos)
  };
  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  };
  const addTodo = (text) => {
    const newTodos = [...todos, { text, completed: false }];
    saveTodos(newTodos);
  };

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
        {filterTodos.length === 0 && <TodoLoading />}
        
        {filterTodos.map((todo, index) => (
          <TodoItem 
            key={index} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => completeTodo(todo.text)} 
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <TodoAdd onAddTodo={addTodo} />
    </>
  )
}

export default App

/*
Falta todavia hacer las felicitaciones de los Todo completados
 */
