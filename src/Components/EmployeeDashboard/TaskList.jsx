import AcceptTask from "../TaskList/AcceptTask";
import CompleteTask from "../TaskList/CompleteTask";
import FailedTask from "../TaskList/FailedTask";
import NewTask from "../TaskList/NewTask";

// eslint-disable-next-line react/prop-types
const TaskList = ({data}) => {
  return (
    <div id='taskList'className="h-[57%] overflow-x-auto fw-full mt-10 py-5 flex items-center flex-row justify-start gap-6 flex-nowrap">
        
        {data.map((task ,idx) => {

          if(task.active){
            return <AcceptTask key={idx} data={task}/>
          
          }if(task.newTask){
            return <NewTask key={idx} data={task}/>
          
          }if(task.completed){
            return <CompleteTask key={idx} data={task}/>
          
          }if(task.failed){
            return <FailedTask key={idx} data={task}/>
          }  
        })}
        
    </div>
  )
}

export default TaskList;
