import AllTask from "../AdminDashboard/AllTask";
import CreateTask from "../AdminDashboard/CreateTask";
import Header from "../EmployeeDashboard/Header";

function AdminDashboard() {
  return (
    <div className="min-h-screen w-full p-10 bg-gray-900 text-white font-sans">
      <Header />
      <div className="flex flex-col lg:flex-row mt-8 gap-8">
        <CreateTask />
        <AllTask />
      </div>
    </div>
  );
}

export default AdminDashboard;
