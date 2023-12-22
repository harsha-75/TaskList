import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Task from "./components/Task";
import Taskstatus from "./components/TaskStatus";
import TaskstatusTwo from "./components/TaskStatusTwo";
import { Taskprovider } from "./context/TaskContext";
function App()
{
    return(
        <Taskprovider>
    <div className="bg-blue-200 h-screen text-white rounded">
            <Header/>
            <Taskstatus/>
            <TaskstatusTwo/>
            <AddTask/>
            <Task/>
    </div>
    </Taskprovider>
   )
}
export default App