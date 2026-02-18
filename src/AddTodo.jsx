import './AddTodo.css';

function AddTodo({task, setTask, date, setDate, hadleClick}) {
   
    return (
        <div>
            <input 
                className="inputField"
                value={task} 
                type="text" 
                placeholder="Add new task"
                onChange={(e) => setTask(e.target.value)} />
            <input className='dateInput'
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)} />
            <button className="addButton"
            onClick={hadleClick}
            >Add</button>

        </div>
    )
}

export default AddTodo;