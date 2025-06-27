import axios from 'axios';
import React, { useState } from 'react';

const leverages = ['1:100', '1:200', '1:300', '1:400'];
const deposits = ['5000 USD', '1000 USD', '5500 USD', '7500 USD'];

const Register = () => {
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [leverage, setLeverage] = useState('');
  const [deposit, setDeposit] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
        firstname, lastname, email, phone, leverage, deposit
    }
    localStorage.setItem('data', JSON.stringify(data))
    

    try {
        const response = await axios.post("http://localhost:3002/api/register", data)
        console.log(response.data)
        alert('Registration successful')

    }
    catch {
        alert('Registration failed')
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-6">
        <div className="flex flex-col items-center mb-8">
          <img src="/1737625911306-ff20c204-5c62-45b0-ad13-d7c79f65739a_1.jpg" alt="Heddge Capitals" className="h-20 w-20 object-contain mb-4" />
          <span className="font-bold text-3xl tracking-widest text-[#181d3a] text-center">HEDDGE<br/>CAPITALS</span>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input type="text" placeholder="First Name" className="w-full border rounded px-4 py-3 text-lg" value={firstname} onChange={e => setfirstname(e.target.value)} required />
          <input type="text" placeholder="Last Name" className="w-full border rounded px-4 py-3 text-lg" value={lastname} onChange={e => setlastname(e.target.value)} required />
          <input type="email" placeholder="Email" className="w-full border rounded px-4 py-3 text-lg" value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="tel" placeholder="Phone Number" className="w-full border rounded px-4 py-3 text-lg" value={phone} onChange={e => setPhone(e.target.value)} required />
          <div className="flex space-x-2">
            <div className="w-1/2">
              <label className="block text-sm mb-1">Leverage</label>
              <select className="w-full border rounded px-4 py-3 text-lg" value={leverage} onChange={e => setLeverage(e.target.value)} required>
                <option value="">Select leverage</option>
                {leverages.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            <div className="w-1/2">
              <label className="block text-sm mb-1">Deposit</label>
              <select className="w-full border rounded px-4 py-3 text-lg" value={deposit} onChange={e => setDeposit(e.target.value)} required>
                <option value="">Select deposit</option>
                {deposits.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
          </div>
          <button type="submit" className="w-full bg-[#181d3a] text-white py-3 rounded text-lg font-semibold mt-4"
          onClick={handleSubmit}
          >Register</button>
        </form>
       
      </div>
    </div>
  );
};

export default Register; 