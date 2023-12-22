import {  useContext } from "react"
import TaskContext from "../context/TaskContext";
function AddTask()
{
    const{text,handletext,submit}=useContext(TaskContext)
    return(
       <div className="max-w-md mx-auto mt-20 bg-white p-8 border rounded-lg shadow-lg">
        <div className="text-black ">
            <form className="flex flex-col justify-items-center" onSubmit={submit}>
                <input type="text" name="" id="" placeholder="write a Task" className="p-6 border
                 border-black border-solid rounded" value= {text} onChange={(e)=>handletext(e.target.value)} />
                <button type="submit" className="bg-blue-500 pt-4 pb-4 pl-8 pr-8 mt-4 br-4 rounded-md hover:bg-blue-700">ADD TASK</button>
            </form>
        </div>
       </div>
    )
}
export default AddTask