import './AddTodo.css';

function AddTodo({task, setTask, hadleClick}) {

    // function hadleClick(){
    //     if(task.trim() === '') return;
    //     setTodos([...todos, {id: Date.now(), text: task, completed: false}]);
    //     console.log(todos);
    // }    
    return (
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

        </div>
    )
}

export default AddTodo;