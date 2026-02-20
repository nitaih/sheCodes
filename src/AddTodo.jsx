import './AddTodo.css';

function AddTodo({task, setTask, date, setDate, handleClick, setConfirmRemove}) {

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
            <input className='dateInput'
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