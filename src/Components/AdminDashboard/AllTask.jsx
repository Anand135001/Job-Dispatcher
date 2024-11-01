import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
  const [employee] =  useContext(AuthContext);

  return (
      <div className="bg-gray-800 p-5 rounded mt-0 flex-1 max-w-md mx-auto lg:max-w-none">
        
        <h2 className="text-2xl font-semibold mb-4">Assigned Tasks</h2>
        {/* <div className="space-y flex"> */}
        <div className="bg-gray-800 py-2 px-4 flex justify-between rounded gap-2 m-2">

            <h3 className="bg-emerald-800 mx-2 w-1/5 px-2">Name</h3>
            <h3 className="bg-emerald-800 mx-2 w-1/5 px-2">New Task</h3>
            <h3 className="bg-emerald-800 mx-2 w-1/5 px-2">Active</h3>
            <h3 className="bg-emerald-800 mx-2 w-1/5 px-2">Completed</h3>
            <h3 className="bg-emerald-800 mx-2 w-1/5 px-2">failed</h3> 
        
        </div>
         {employee.map((e) => {
           return (
                <>
                  <div className="bg-gray-700 py-2 px-4 flex justify-between rounded gap-2 m-2">
                  <h3 className="bg-emerald-800 mx-2 w-1/5 px-2">{e.firstName}</h3>
                  <h3 className="bg-emerald-800 mx-2 w-1/5 px-2">{e.taskCount.newTask}</h3>
                  <h5 className=" bg-red-700  mx-2 w-1/5 px-2">{e.taskCount.active}</h5>
                  <h5 className=" bg-red-700  mx-2 w-1/5 px-2">{e.taskCount.completed}</h5>
                  <h5 className=" bg-red-700  mx-2 w-1/5 px-2">{e.taskCount.failed}</h5>
                  </div>
              </> )
         })}
      </div>
    );
  }
  
  export default AllTask;
  