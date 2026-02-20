import './AddTodo.css';
function TodoItem({ item, handleRemove, toggleCompleted,confirmRemove, setConfirmRemove }) {
    const pendingRemove = confirmRemove === item.id;
    return (
        <div className="todoItem">
            <div className='itemDetails'>
                <div className='itemDetails'>
                <input type='checkbox' id={item.id} checked={item.completed} onChange={() =>  toggleCompleted(item.id)}/>
                <label for={item.id}>{item.text}</label>   
            </div>
            <p className='dateItem'>{item.date}</p>
                        
            <button className='removeButton' 
            onClick={() => setConfirmRemove(item.id)}
            >Remove</button>
            </div>
            
            <div className='itemDetails'>{pendingRemove ?
            <div> 
                <span>Are you sure you want to remove this item?</span>
                <button className='confirmButton' onClick={() => {handleRemove(item.id); setConfirmRemove(null);}}>Yes</button>
                <button className='confirmButton' onClick={() => setConfirmRemove(null)}>No</button>
            </div> 
                : null}</div>
        </div>
    )

}
export default TodoItem;