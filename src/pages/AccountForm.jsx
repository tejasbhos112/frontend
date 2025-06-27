import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const AccountForm = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")




  const handleLogin = async (e) => {
    e.preventDefault();

    console.log("Login button clicked");
    localStorage.setItem("email", email, )
    localStorage.setItem("password", password);

    try {
      const response = await axios.post("http://localhost:3002/admin/login", { email, password });
       console.log(response.data)
       alert("Login successful")
      
    } catch (error) {
      console.log(error)

    }

  }

  useEffect(() =>{
    



  },[])


  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="bg-[#f3efef] rounded-lg shadow-2xl p-8 w-full max-w-md relative">
        <div className="flex items-center mb-6">
          <img src="/1737625911306-ff20c204-5c62-45b0-ad13-d7c79f65739a_1.jpg" alt="Heddge Capitals" className="h-12 w-12 object-contain mr-4 rounded" />
          <span className="font-bold text-lg tracking-widest">HEDDGE CAPITALS</span>
          
        </div>
        <form className="space-y-4">
          <div>
            <label className="block font-bold mb-1">Email:</label>
            <input type="text" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-bold mb-1">Password:</label>
            <input type="password" className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <div className="flex justify-center pt-4">
            <button type="submit" className="px-8 py-2 rounded border bg-white hover:bg-blue-50 shadow" 
            onClick={handleLogin} >Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountForm; 