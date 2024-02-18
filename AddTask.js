import { useState,useRef } from "react";
import "./AddTask.css";
export const AddTask = ({tasks,setTasks}) => {
// const [taskValue,setTaskValue] = useState("");
const[progress,setProgress] = useState(false);
const taskRef = useRef("");

    const handleChange =(event) => {
        // setTaskValue(event.target.value);
        console.log(taskRef);
    }
    const handleReset = () => {
        // setTaskValue("");
        taskRef.current.value="";
        setProgress(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(typeof(Boolean(progress)));
        const task ={
            id:Math.floor(Math.random()*10000),
            name:"abc",
            completed:Boolean(progress)
        }
        setTasks([...tasks,task]);
        handleReset();
    }

  return (
<section className="addtask"> 
<form onSubmit={handleSubmit}>
    {/* <label htmlFor="task">Task Name:</label> */}
    <input 
    // onChange={handleChange}
    type="text"
     name="task"
     id="task"
     placeholder="Task Name"
     autoComplete="off"
    //  value={taskValue}
     ref={taskRef} />
     <select onChange={(event) => setProgress(event.target.value)} value={progress}>
        <option value={false}>Pending</option>
        <option value={true}>Completed</option>
        <option>Ongoing</option>
     </select>
     {/* <button type="submit">Add Task</button> */}
     <span onClick={handleReset} className="reset">Reset</span>
     <button type="submit">Add Task</button>
</form> 
<p></p>
</section>  
)
}
