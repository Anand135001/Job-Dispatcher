function CreateTask() {
  return (
    <div className="p-8 bg-gray-800 rounded-lg shadow-lg max-w-md mx-auto lg:max-w-none flex-1">
      <h2 className="text-3xl font-semibold mb-6">Create New Task</h2>
      <form className="space-y-6">
        <div>
          <label className="block text-lg font-medium">Task Title</label>
          <input
            type="text"
            placeholder="Make UI"
            className="mt-2 w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Description</label>
          <textarea
            rows="5"
            placeholder="Describe the task..."
            className="mt-2 w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Date</label>
          <input
            type="date"
            className="mt-2 w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Assign to</label>
          <input
            type="text"
            placeholder="Employee"
            className="mt-2 w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-teal-500"
          />
        </div>

        <div>
          <label className="block text-lg font-medium">Category</label>
          <input
            type="text"
            placeholder="Design, Development"
            className="mt-2 w-full p-3 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-teal-500"
          />
        </div>

        <button className="w-full mt-4 bg-teal-500 p-3 rounded-md shadow-md hover:bg-teal-400 transition">
          Create Task
        </button>
      </form>
    </div>
  );
}

export default CreateTask;
