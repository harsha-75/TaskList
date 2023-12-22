import { useContext } from "react"
import TaskContext from "../context/TaskContext";
function Taskstatus()
{
     const{add,Taskadd}=useContext(TaskContext)
     setTimeout(()=>{
                Taskadd(false)
     },4000)
     return(add && <div className=" text-center p-4 ">
           <h1 className="text-green-500">Task Added sucessfully</h1>
     </div>)
}
export default Taskstatus;