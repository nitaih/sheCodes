import TodoItem from './TodoItem';
function ShowList({todos, handleRemove, toggleCompleted, filter, confirmRemove, setConfirmRemove,sortByKey, sortBy}) {
    todos.sort(sortByKey(sortBy));
    const filteredTodos = todos.filter((item) => {
        if (filter === "active") return !item.completed;
        if (filter === "completed") return item.completed;
        return true;
    });
  
    return (
        <div>
            <ul>
                {filteredTodos.map((item) => (
                    <li key={item.id} className='todo-item'>
                        <TodoItem item={item} 
                        handleRemove={handleRemove} 
                        toggleCompleted={toggleCompleted}
                        confirmRemove={confirmRemove}
                        setConfirmRemove={setConfirmRemove}
                        />

                    </li>))}
            </ul>
        </div>
    )
}
export default ShowList;