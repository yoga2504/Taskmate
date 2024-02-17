import { useState } from "react";
import "./AddTask.css";
export const AddTask = () => {
const [taskValue,setTaskValue] = useState("");

    const handleChange =(event) => {
        setTaskValue(event.target.value);
    }
  return (
<section className="addtask"> 
<form>
    <label htmlFor="task">Task Name:</label>
    <input onChange={handleChange}
    type="text"
     name="task"
     id="task" />
     <button type="submit">Add Task</button>
</form>
<p>{taskValue.length}</p>
</section>  
)
}
