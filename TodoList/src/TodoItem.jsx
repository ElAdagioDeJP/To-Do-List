import React, { useState } from 'react';
import './TodoItem.css';

function TodoItem({ text, completed }) {
  const [isCompleted, setIsCompleted] = useState(completed);

  const toggleCompleted = () => {
    setIsCompleted(!isCompleted); // Cambia entre true y false
  };

  return (
    <div className={`container ${isCompleted ? 'completed' : 'not-completed'}`}>
      <span 
        className="check" 
        onClick={toggleCompleted}
        style={{ color: isCompleted ? '#42ad36' : '#ccc' }} // Cambia el color del ícono ✅
      >
        ✅
      </span>
      <p 
        style={{
          textDecoration: isCompleted ? 'line-through' : 'none', // Subraya si está completado
          color: isCompleted ? 'gray' : 'black' // Cambia el color del texto
        }}
      >
        {text}
      </p>
      <span className="delete">X</span>
    </div>
  );
}

export { TodoItem };
