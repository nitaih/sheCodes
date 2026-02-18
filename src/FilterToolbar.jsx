import './FilterToolbar.css';
export default function FilterToolbar({setFilter}) {
    return (
        <div className="filterToolbar">
            <button className="allButton" onClick = {() => setFilter("all")}>All</button>
            <button className="activeButton" onClick = {() => setFilter("active")}>Active</button>
            <button className="completedButton" onClick = {() => setFilter("completed")}>Completed</button>
        </div>
    )
}