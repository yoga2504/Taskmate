import {useState} from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
// import "./TaskList.css";
import "./AddTask";


export const TaskList = ()=>{
    const [tasks, setTasks] = useState([
        {id: 5271, name: "Record React Lectures", completed: true},
        {id: 7825, name: "Edit React Lectures", completed: false},
        {id: 8391, name: "Watch Lectures", completed: false}
         ] );
        const [show, setShow] = useState(true) ;
        // const styles = {
        //         color:show ? "3d8361":"#be3434",
        //         border:"2px solid",
        //         borderColor:show ? "#3D8361":"be3434",
        //         borderRadius:"5px",
        //         fontSize:"28px",
        //         padding:"20px"
        //       }
        function handleDelete(id){
        setTasks (tasks.filter (task => task.id !== id));
        }
return(
    <>
    <section className='tasklist'>
   {/* < h1 style={styles}>Task List</h1> */}
  <ul>
    <div className='header'>
      <h1>TaskList</h1>
  <button className='trigger' onClick={() => setShow(!show) }>{show? "Hide":"Show"}</button>
  </div>
  { show && tasks.map((task) =>(
  <TaskCard key={task.id} task={task} handleDelete={handleDelete}/>
  ))}
  </ul>
  <BoxCard result="box success">
    <p className="title">GUCCI</p>
    <p className ="description">Welcome to Gucci</p>
  </BoxCard>
  <BoxCard result="box warning">
    <p className='title'>Gucci</p>
    <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor recusandae tempora, impedit quam ipsa assumenda ex beatae voluptatem perferendis exercitationem numquam odit vitae voluptates commodi eius doloremque dolorum reiciendis voluptas.</p>
  </BoxCard>
  </section>
  {/* <BoxCard className='box alert'>
    <p className='title'>Gucci</p>
    <p className='description'>Bye</p>
  </BoxCard> */}
    </>
)
  }
