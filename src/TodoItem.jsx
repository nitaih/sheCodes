import './AddTodo.css';
import React from 'react';
import {Tooltip} from 'react-tooltip';
function TodoItem({ item, handleRemove, toggleCompleted,confirmRemove, setConfirmRemove }) {
    const pendingRemove = confirmRemove === item.id;
    const taskColor = item.completed ? '#5fca21ad' : (item.date < new Date().toISOString().split('T')[0] ? '#e33d0b':'rgb(240, 238, 238)');
    const priorityColor = item.priority === "High" ? 'red' : (item.priority === "Low" ? 'green' : 'black');
    return (
        <div className="todoItem" style={{background: taskColor}}>
            <div className='itemDetails'>
                <div className='itemDetails'>
                <input type='checkbox' id={item.id} checked={item.completed} onChange={() =>  toggleCompleted(item.id)}/>
                <label data-tooltip-id="my-tooltip"
                data-tooltip-content={item.text} for={item.id}>{item.text.slice(0, 30)}</label>
                <Tooltip id="my-tooltip" place="top" effect="solid" />   
            </div>
            <p className='dateItem'><span style={{color: priorityColor}}>{item.priority === 'None' || !item.priority ? '' : item.priority} </span> | {item.date}</p>
                        
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