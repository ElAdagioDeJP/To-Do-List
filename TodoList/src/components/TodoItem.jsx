import '../styles/TodoItem.css'
function TodoItem({ text, completed, onComplete, onDelete }) {
  return (
    <div className="container" style={{ backgroundColor: completed ? 'gray' : 'aliceblue' }}>
      <span className="check" 
      style={{ opacity: completed ? '0.4' : '1' }}
      onClick={onComplete}
      >✅</span>
      <p 
      style={{ textDecoration: completed ? 'line-through' : 'none' }}
      >{text}</p>
      <span className="delete"
      onClick={onDelete}
      >X</span>
    </div>
  );}


export { TodoItem };
