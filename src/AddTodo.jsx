import './AddTodo.css';

function AddTodo({task, setTask, date, setDate, handleClick,setPriority}) {

    const handleSubmit = (e) => {
        e.preventDefault();
        handleClick();
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleClick();
        }
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <input 
                className="inputField"
                value={task} 
                type="text" 
                placeholder="Add new task"
                onChange={(e) => setTask(e.target.value)} />
            <select className="dateInput" onChange={(e) => setPriority(e.target.value)}>
                <option value="">Priority</option>
                <option value="High">High</option>
                <option value="Low">Low</option>
                <option value="None">None</option>
            </select>
            <input 
            className="dateInput"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            onKeyDown={handleKeyDown} />
            <button className="addButton"
            type='submit'
            >Add</button>

        </form>
    )
}

export default AddTodo;