import { useContext } from 'react'
import {FaTimes} from 'react-icons/fa'
import TaskContext from '../context/TaskContext'
function Taskcomp({item})
{
     const{handledelete}=useContext(TaskContext)
    return (
        <div className="max-w-md mx-auto bg-purple rounded-lg overflow-hidden shadow-md mt-4">
          <div className="p-4 flex items-center place-content-between">
            <h1 className="text-left">{item}</h1>
             <div className='mx'>
              <FaTimes color="purple" className="cursor-pointer"  onClick={()=>handledelete(item)}/>
              </div>
          </div>
        </div>
      )
}
export default Taskcomp