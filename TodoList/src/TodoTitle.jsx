import './TodoTitle.css'

function TodoTitle({completed , incompleted}) {
    return (
        <h1>Se han realiazado {completed} de {incompleted} tareas</h1>
    )
    
}

export {TodoTitle};