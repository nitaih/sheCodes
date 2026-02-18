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

    function hadleClick(){
        if(task.trim() === '') return;
        setTodos([...todos, {id: Date.now(), text: task, date: date, completed: false}]);
        console.log(todos);
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
            hadleClick={hadleClick}/>
            <FilterToolbar setFilter={setFilter}/>
            <ShowList todos={todos} 
            handleRemove={handleRemove} 
            toggleCompleted={toggleCompleted}
            filter={filter}/>
        </div>
    )
}

export default TodoApp;