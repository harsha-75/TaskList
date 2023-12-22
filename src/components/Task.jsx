import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import Taskcomp from "./Taskcomp";
function Task()
{
    const{task}=useContext(TaskContext);
     return( task && task.length>0 && (<div className="text-black text-center mt-8">
     <h1 className="text-5xl text-violet-500 mb-2">The Task List</h1>
     <ul>
          {task.map((item)=>(
             <Taskcomp item={item}/>
          ))}
     </ul>
  </div>)) 
}
export default Task
