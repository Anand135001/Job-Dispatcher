import AdminDashboard from './Components/Dashboard/AdminDashboard';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login"
import { AuthContext } from './Context/AuthProvider';
// import { getLocalStorage, setLocalStorage } from "./utils/localStorage";

const App = () => {
  
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authdata = useContext(AuthContext);
  // setLocalStorage()
  // getLocalStorage()


  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser')
    
    if(loggedInUser){
       const userData = JSON.parse(loggedInUser);
       setUser(userData.role);
       setLoggedInUser(userData.data);
    }
    
  }, [])



  const handleLogin = (email, password) =>{
      
    if(email == 'admin@me.com' && password == '123'){
        
        setUser('admin');
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}));
      }
      else if(authdata){
        const employee = authdata.employees.find((e) => email == e.email && e.password == password);

        if(employee){
          setUser('employee');
          setLoggedInUser(employee);
          localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}));
          }
      }
      else{
        alert('invaild credentials');
      }
  }
  
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : ''}
      {user === 'employee' ? <EmployeeDashboard data={loggedInUser}/> : ''}
    </>
  )
}

export default App;
