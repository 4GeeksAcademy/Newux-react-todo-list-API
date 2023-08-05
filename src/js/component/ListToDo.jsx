export function ListToDo() {
    const [todos, setTodos] = useState([]) //empty array for todos
    
    const deleteTodo = (id) => {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)
        })
        }  

    return (
        <ul className="list-group">
            {/* for each one of my todos i want to return an li */}
            {todos.map(todo => {
                return (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between">
                        {todo.title}
                        <button onClick={() => deleteTodo(todo.id)} className="btn">x</button>
                    </li>
                )
            })}
        </ul>
    )
}
