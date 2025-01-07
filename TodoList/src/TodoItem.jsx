import'./TodoItem.css'
function TodoItem({ text, completed }) {
  return (
    <div className="container" style={{ backgroundColor: completed ? 'gray' : 'aliceblue' }}>
      <span className="check" 
      style={{ opacity: completed ? '0.4' : '1' }}
      >✅</span>
      <p 
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >{text}</p>
      <span className="delete">X</span>
    </div>
  );}


export { TodoItem };
