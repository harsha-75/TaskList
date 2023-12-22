import { createContext, useState } from "react";
const TaskContext= createContext()
export const Taskprovider=({children})=>{
    const[text,setText]=useState('');
    const[task,setTask]=useState([]);
    const[add,Taskadd]=useState(false);
    const[del,Taskdelete]=useState(false);
    const handletext=(value)=>{
          setText(value)
    }
    const submit=(e)=>{
        if(text==='')
        {
            window.alert('please add a task')
        }
        else
        {
            setTask((prev)=>[...prev,text]);
            Taskadd(true);
        }
        setText('');
        e.preventDefault()
    }
    const handledelete=(value)=>{
        const item= task.filter(task1=> task1 !== value)
        // console.log(value);
        setTask(item)
        Taskdelete(true)    
   }
    return(<TaskContext.Provider value={{text,task,handletext,submit,add,Taskadd,handledelete,del,Taskdelete}}>
        {children}
    </TaskContext.Provider>)
}
export default TaskContext