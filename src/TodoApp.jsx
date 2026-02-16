import Title from "./Title";
import AddTodo from "./AddTodo";
import { useState } from "react";   
function TodoApp() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);
    return (
        <div>
            <Title />
            <AddTodo task={task} 
            setTask={setTask}
            todos={todos}
            setTodos={setTodos}/>
        </div>
    )
}
export default TodoApp;