import Title from "./Title";
import AddTodo from "./AddTodo";
import { useState } from "react";   
import ShowList from "./ShowList";
import FilterToolbar from "./FilterToolbar";
function TodoApp() {

    const [task, setTask] = useState("");
    const [date, setDate] = useState("");
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState("all");
    const [confirmRemove, setConfirmRemove] = useState(null);

    function handleClick(){
        if(task.trim() === '') return;
        setTodos([...todos, {id: Date.now(), text: task, date: date, completed: false}]);
        console.log(todos);
        setConfirmRemove(null); 
    } 
    function handleRemove(id){
        setTodos(todos.filter((item) => item.id !== id));
    }
    function toggleCompleted(id) {
        setTodos(todos.map((item) => 
        item.id === id ? { ...item, completed: !item.completed } : item
        ));
        console.log(todos);
    }

    return (
        <div>
            <Title />
            <AddTodo task={task} 
            setTask={setTask}
            date={date}
            setDate={setDate}
            handleClick={handleClick}
            setConfirmRemove={setConfirmRemove}
            />
            <FilterToolbar setFilter={setFilter}/>
            <ShowList todos={todos} 
            handleRemove={handleRemove} 
            toggleCompleted={toggleCompleted}
            filter={filter}
            confirmRemove={confirmRemove}
            setConfirmRemove={setConfirmRemove}
            />
        </div>
    )
}

export default TodoApp;