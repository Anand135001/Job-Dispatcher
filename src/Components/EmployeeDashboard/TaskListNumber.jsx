// function TaskListNumber() {
//   return (
//     <div className='flex justify-between gap-5 mt-10 screen'>
     
//        <div className='rounded-xl h-40 w-[45%] py-6 px-9 bg-red-400 '>
//           <h2 className="text-2xl  font-semibold">0</h2>
//           <h2 className="text-xl font-medium">New Task</h2>
//        </div> 

//        <div className='rounded-xl h-40 w-[45%] py-6 px-9 bg-blue-400 '>
//           <h2 className="text-2xl  font-semibold">0</h2>
//           <h2 className="text-xl font-medium">New Task</h2>
//        </div> 

//        <div className='rounded-xl h-40 w-[45%] py-6 px-9 bg-green-400 '>
//           <h2 className="text-2xl  font-semibold">0</h2>
//           <h2 className="text-xl font-medium">New Task</h2>
//        </div> 
      
//        <div className='rounded-xl h-40 w-[45%] py-6 px-9 bg-cyan-400'>
//           <h2 className="text-2xl  font-semibold">0</h2>
//           <h2 className="text-xl font-medium">New Task</h2>
//        </div> 
       
    
//     </div>
//   )
// }

// export default TaskListNumber


// function TaskListNumber() {
//    return (
//      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
//        <div className="flex flex-col items-center bg-red-500 p-6 rounded-lg shadow-lg text-white">
//          <h2 className="text-4xl font-bold">0</h2>
//          <span className="text-xl mt-2">New Tasks</span>
//        </div>
//        <div className="flex flex-col items-center bg-blue-500 p-6 rounded-lg shadow-lg text-white">
//          <h2 className="text-4xl font-bold">0</h2>
//          <span className="text-xl mt-2">In Progress</span>
//        </div>
//        <div className="flex flex-col items-center bg-green-500 p-6 rounded-lg shadow-lg text-white">
//          <h2 className="text-4xl font-bold">0</h2>
//          <span className="text-xl mt-2">Completed</span>
//        </div>
//        <div className="flex flex-col items-center bg-teal-500 p-6 rounded-lg shadow-lg text-white">
//          <h2 className="text-4xl font-bold">0</h2>
//          <span className="text-xl mt-2">Pending Review</span>
//        </div>
//      </div>
//    );
//  }
 
//  export default TaskListNumber;


// TaskListNumber.js

const TaskListNumber = ({data}) => {

   return (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
       <div className="flex flex-col items-center bg-gray-700 p-6 rounded-lg shadow-lg text-white">
         <h2 className="text-4xl font-bold text-teal-300">{data.newTask}</h2>
         <span className="text-lg mt-2 text-gray-300">New Task</span>
       </div>
       <div className="flex flex-col items-center bg-gray-700 p-6 rounded-lg shadow-lg text-white">
         <h2 className="text-4xl font-bold text-teal-300">{data.active}</h2>
         <span className="text-lg mt-2 text-gray-300">In Progress</span>
       </div>
       <div className="flex flex-col items-center bg-gray-700 p-6 rounded-lg shadow-lg text-white">
         <h2 className="text-4xl font-bold text-teal-300">{data.completed}</h2>
         <span className="text-lg mt-2 text-gray-300">Completed</span>
       </div>
       <div className="flex flex-col items-center bg-gray-700 p-6 rounded-lg shadow-lg text-white">
         <h2 className="text-4xl font-bold text-teal-300">{data.failed}</h2>
         <span className="text-lg mt-2 text-gray-300">Pending Review</span>
       </div>
     </div>
   );
 }
 
 export default TaskListNumber;





 
 