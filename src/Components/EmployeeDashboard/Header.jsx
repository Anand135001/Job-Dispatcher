
// function Header() {

//   return (
//     <div className="flex items-end justify-between">
//        <h2 className="text-2xl font-medium">
//          Hello <br/> 
//          <span className="text-3xl font-semibold">Anand!</span> 
//        </h2>
//        <button className="border-white-600 p-2 bg-red-500 text-lg">Log Out</button>
//     </div>
//   )
// }

// export default Header;

const Header = ({data}) => {
  
  // console.log(data.firstName)

  return (
    <div className="flex items-center justify-between mb-8">
      <h2 className="text-3xl font-semibold">
        Hello, <span className="text-emerald-400">{data.firstName}!</span>
      </h2>
      <button className="px-4 py-2 bg-red-600 text-white rounded-md transition hover:bg-red-500">
        Log Out
      </button>
    </div>
  );
}

export default Header;


