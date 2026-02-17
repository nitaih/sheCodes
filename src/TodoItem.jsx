import './AddTodo.css';
function TodoItem({ item, handleRemove }) {
    return (
        <div className="todoItem">
            <div>
                <input type='checkbox' id={item.id} checked={item.complited} />
                <label for={item.id}>{item.text}</label>   
            </div>
                        
            <button className='removeButton' 
            onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
    )

}
export default TodoItem;