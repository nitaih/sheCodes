import './AddTodo.css';
function TodoItem({ item, handleRemove, toggleCompleted }) {
    return (
        <div className="todoItem">
            <div className='itemDetails'>
                <input type='checkbox' id={item.id} checked={item.completed} onChange={() =>  toggleCompleted(item.id)}/>
                <label for={item.id}>{item.text}</label>   
            </div>
            <p className='dateItem'>{item.date}</p>
                        
            <button className='removeButton' 
            onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
    )

}
export default TodoItem;