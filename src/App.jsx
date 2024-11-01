import AdminDashboard from './Components/Dashboard/AdminDashboard';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login"
import { AuthContext } from './Context/AuthProvider';


const App = () => {
  
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData, setUserData] = useContext(AuthContext);


  useEffect(() => {
    const currentLogInUser = localStorage.getItem('currentUser');
    
    if(currentLogInUser){
       const userData = JSON.parse(currentLogInUser);
       setUser(userData.role);
       setLoggedInUserData(userData.data);
    }

  }, [])


  const handleLogin = (email, password) =>{
      
    if(email == 'admin@me.com' && password == '123'){
        setUser('admin');
        localStorage.setItem('currentUser', JSON.stringify({role:'admin'}));
      }

      else if(userData){

        const employee = userData.find((e) => email == e.email && e.password == password);
        if(employee){
          setUser('employee');
          setLoggedInUserData(employee);
          localStorage.setItem('currentUser', JSON.stringify({role:'employee', data: employee}));
          }
      }
      else{
        alert('invaild credentials');
      }

  }


  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard /> : user === 'employee' ? <EmployeeDashboard data={loggedInUserData}/> : null}
    </>
  )
}

export default App;
