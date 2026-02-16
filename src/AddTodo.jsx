import './AddTodo.css';
function AddTodo({task, setTask, todos, setTodos}) {
    function hadleClick(){
        setTodos([...todos, task]);
        console.log(todos);
    }    return (
        <div>
            <input 
                className="inputField"
                value={task} 
                type="text" 
                placeholder="Add new task"
                onChange={(e) => setTask(e.target.value)} />
            <button className="addButton"
            onClick={hadleClick}
            >Add</button>
                <ShowList todos={todos}/>   
        </div>
    )}
function ShowList({todos}) {
    return (
        <div>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>
                        <input type='checkbox' id={index} />
                        <label for={index}>{item}</label>
                        </li>))}
            </ul>
        </div>
    )
}
export default AddTodo;