import Header from "../EmployeeDashboard/Header";
import TaskListNumber from "../EmployeeDashboard/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({data}) => {
  
  return (
    <div className="p-10 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 h-screen text-white">
      <Header data={data} />
      <TaskListNumber data={data.taskCount} />
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard;


