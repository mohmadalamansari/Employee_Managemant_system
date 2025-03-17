import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)
    console.log("Email:", email, "Password:", password);

    setEmail('')
    setPassword('')
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 py-10 px-5">
        <form 
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center">
          
          <input 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
            className="text-black outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-gray-400" 
            type="email" 
            placeholder="Enter your Email">
          </input>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
            className="text-black outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 mt-4 placeholder:text-gray-400" 
            type="password" 
            placeholder="Enter password">
          </input>

          <button className="mt-5 text-white outline-none border-2 bg-emerald-600 rounded-full text-xl py-3 px-5">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
