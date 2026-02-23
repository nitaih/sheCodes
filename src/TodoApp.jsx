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
    const [priority, setPriority] = useState("");
    const [sortBy, setSortBy] = useState("Sort By");

    function handleClick(){
        if(task.trim() === '') return;
        setTodos([...todos, {id: Date.now(), timeStamp: new Date().toLocaleString(), text: task, date: date, completed: false, priority: priority}]);
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
    const sortByKey = (key) => (a, b) => {
        if(a[key] > b[key]) return 1;
        if(a[key] < b[key]) return -1;
        return 0;
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
            setPriority={setPriority}
            />
            <FilterToolbar setFilter={setFilter}
            setSortBy={setSortBy}
            />
            <ShowList todos={todos} 
            handleRemove={handleRemove} 
            toggleCompleted={toggleCompleted}
            filter={filter}
            confirmRemove={confirmRemove}
            setConfirmRemove={setConfirmRemove}
            sortByKey={sortByKey}
            sortBy={sortBy}
            />
        </div>
    )
}

export default TodoApp;