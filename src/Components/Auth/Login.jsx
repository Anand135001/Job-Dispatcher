import { useState } from "react";

function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        
        setEmail('');
        setPassword('');
    }

    return (
      <div className="flex items-center justify-center h-screen w-screen bg-gray-900">
        <div className="border-2 border-emerald-600 p-10 md:p-16 lg:p-20 rounded-xl shadow-lg bg-gray-800">
          <form className="flex flex-col gap-4 items-center justify-center" 
            onSubmit={(e) => submitHandler(e)}>
            <h2 className="text-2xl font-semibold text-emerald-500 mb-4">Welcome Back</h2>
  
            <input
              className="w-72 border-2 border-emerald-600 px-5 py-3 rounded-full placeholder-gray-400 text-white bg-gray-900 outline-none transition duration-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-72 border-2 border-emerald-600 px-5 py-3 rounded-full placeholder-gray-400 text-white bg-gray-900 outline-none transition duration-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            
            <button
              className="mt-6 w-72 bg-emerald-600 px-4 py-2 text-white rounded-full transition duration-200 transform hover:bg-emerald-700 hover:scale-105 focus:outline-none"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Login;
  