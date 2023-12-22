import { useContext } from "react"
import TaskContext from "../context/TaskContext";
function TaskstatusTwo()
{
     const{del,Taskdelete}=useContext(TaskContext)
     setTimeout(()=>{
                Taskdelete(false)
     },4000)
     return(del && <div className="text-center p-4 ">
           <h1 className="text-red-500">Task has been deleted</h1>
     </div>)
}
export default TaskstatusTwo;