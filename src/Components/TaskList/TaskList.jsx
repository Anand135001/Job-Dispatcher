function TaskList() {
  return (
    <div className="h-[57%] overflow-x-auto fw-full mt-10 py-5 flex items-center flex-row justify-start gap-6 flex-nowrap" id="task-List">
        
        <div className="flex-shrink-0 h-full bg-gray-800 w-[300px] rounded-xl ">  
            <div className="flex justify-between items-center m-4">
                <h2 className="bg-slate-500 text-sm px-3 py-1 rounded">High</h2>
                <h4 className="text-base">20 feb 2024</h4>
            </div>
            <h1 className="m-4 text-xl font-semibold">Task create Managemnt system</h1>
            <p className="m-4 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam officiis ad totam quasi quaerat quia ullam nihil libero temporibus? Facilis laboriosam dolor iure cupiditate eligendi tenetur id, unde praesentium!</p>
        
        </div>
    </div>
  )
}

export default TaskList;


// function TaskList() {
//     return (
//       <div className="overflow-x-auto space-x-4 flex flex-nowrap pb-6" id="task-List">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 w-[300px] rounded-lg shadow-lg p-6 flex-shrink-0 text-white transform transition duration-200 hover:scale-105"
//           >
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="bg-red-500 text-sm px-3 py-1 rounded-full">High</h2>
//               <h4 className="text-sm">20 Feb 2024</h4>
//             </div>
//             <h1 className="text-xl font-semibold mb-2">Task Management System</h1>
//             <p className="text-sm text-gray-300">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsam officiis ad totam quasi quaerat quia ullam nihil libero temporibus? Facilis laboriosam dolor iure cupiditate eligendi tenetur id, unde praesentium!
//             </p>
//           </div>
//         ))}
//       </div>
//     );
//   }
  
//   export default TaskList;