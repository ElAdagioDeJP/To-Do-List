import { TodoTitle } from './TodoTitle'
import { TodoSearch } from './TodoSearch'
import { TodoList } from './TodoList'
import { TodoItem } from './TodoItem'
import { TodoAdd } from './TodoAdd'
import './App.css'

function App() {
  const todos = [
    {text: 'Buy groceries', completed: false },
    {text: 'Walk the dog', completed: true },
    {text: 'Do the laundry', completed: false },
  ]

  return (
    <>
    {(() => {
      let completedCount = 0;
      todos.forEach(todo => {
        if (todo.completed) {
          completedCount += 1;
        }
      });
      return (
        <TodoTitle completed={completedCount} incompleted={todos.length - completedCount} />
      );
    })()}
    <TodoSearch />
    <TodoList>
      {todos.map((todo, index) => (
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
