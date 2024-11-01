const Header = () => {
    
  // const [username, setUserame] = useState('');
  
    // if(!data){
    //   setUserame('Admin');
    // }else{
    //   setUserame(data.firstName);
    // }

    const logOut = () => {
      localStorage.setItem('currentUser', '');
      window.location.reload();
    }

  return (
    <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-semibold">
          Hello, <span className="text-emerald-400">username!</span>
        </h2>
        <button className="px-4 py-2 bg-red-600 text-white rounded-md transition hover:bg-red-500"
        onClick={() => logOut()}>
        Log Out
        </button>
    </div>
  );

}

export default Header;


