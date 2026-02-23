import './FilterToolbar.css';
export default function FilterToolbar({setFilter, setSortBy}) {
    return (
        <div className="filterToolbar">
            <button className="allButton" onClick = {() => setFilter("all")}>All</button>
            <button className="activeButton" onClick = {() => setFilter("active")}>Active</button>
            <button className="completedButton" onClick = {() => setFilter("completed")}>Completed</button>
            <select className="dateInput" onChange={(e) => setSortBy(e.target.value)}>
                <option value="">Sort By</option>
                <option value="priority">Priority</option>
                <option value="date">Date</option>
                <option value="completed">Status</option>
            </select>
        </div>
    )
}