import './AddTodo.css';
import TodoItem from './TodoItem';
function AddTodo({task, setTask, todos, setTodos}) {

    function hadleClick(){
        if(task.trim() === '') return;
        setTodos([...todos, {id: Date.now(), text: task, completed: false}]);
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
                <ShowList todos={todos} handleRemove={handleRemove}/>   
        </div>
    )
    function handleRemove(id){
        setTodos(todos.filter((item) => item.id !== id));
    }
}
function ShowList({todos, handleRemove }) {
  
    return (
        <div>
            <ul>
                {todos.map((item) => (
                    <li key={item.id} className='todo-item'>
                        <TodoItem item={item} handleRemove={handleRemove} />

                    </li>))}
            </ul>
        </div>
    )
}
export default AddTodo;