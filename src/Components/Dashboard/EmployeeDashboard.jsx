// import Header from "../Others/Header"
// import TaskListNumber from "../Others/TaskListNumber";
// import TaskList from "../TaskList/TaskList"

// function EmployeeDashboard() {
  
//   return (
//     <div className= 'p-10 bg-[#1C1C1C] h-screen'>
        
//         <Header />
//         <TaskListNumber />
//         <TaskList />

//     </div>
//   )
// }

// export default EmployeeDashboard;


import Header from "../Others/Header";
import TaskListNumber from "../Others/TaskListNumber";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard() {
  return (
    <div className="p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 h-screen text-white">
      <Header />
      <TaskListNumber />
      <TaskList />
    </div>
  );
}

export default EmployeeDashboard;


