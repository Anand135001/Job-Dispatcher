function AllTask() {
    return (
      <div className="bg-gray-800 p-5 rounded mt-0 flex-1 max-w-md mx-auto lg:max-w-none">
        <h2 className="text-2xl font-semibold mb-4">Assigned Tasks</h2>
        <div className="space-y-4">
          <div className="bg-lime-500 py-2 px-4 flex justify-between rounded">
            <h3>Anand</h3>
            <h3>Make a UI Design</h3>
            <h5>Status: Pending</h5>
          </div>

          <div className="bg-lime-500 py-2 px-4 flex justify-between rounded">
            <h3>Anand</h3>
            <h3>Make a UI Design</h3>
            <h5>Status: Pending</h5>
          </div>
          {/* Add more tasks as needed */}
        </div>
      </div>
    );
  }
  
  export default AllTask;
  