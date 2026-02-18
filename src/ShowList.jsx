import TodoItem from './TodoItem';
function ShowList({todos, handleRemove, toggleCompleted, filter}) {
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
                        <TodoItem item={item} handleRemove={handleRemove} toggleCompleted={toggleCompleted}/>

                    </li>))}
            </ul>
        </div>
    )
}
export default ShowList;