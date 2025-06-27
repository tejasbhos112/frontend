import React, { useState } from "react";

const initialAccounts = [
  { login: "-", name: "-", group: "-", country: "-", company: "-", balance: "-", credit: "-", leverage: "-" },
];

const TradingAccounts = () => {
  const [accounts] = useState(initialAccounts);

  return (
    <div className="w-full max-w-5xl bg-white rounded-lg shadow p-6 mt-0">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold">Login</th>
            <th className="px-4 py-2 text-left font-bold">Name</th>
            <th className="px-4 py-2 text-left font-bold">Group</th>
            <th className="px-4 py-2 text-left font-bold">Country</th>
            <th className="px-4 py-2 text-left font-bold">Company</th>
            <th className="px-4 py-2 text-left font-bold">Balance</th>
            <th className="px-4 py-2 text-left font-bold">Credit</th>
            <th className="px-4 py-2 text-left font-bold">Leverage</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((acc, idx) => (
            <tr key={idx} className="border-b">
              <td className="px-4 py-2 text-center">{acc.login}</td>
              <td className="px-4 py-2 text-center">{acc.name}</td>
              <td className="px-4 py-2 text-center">{acc.group}</td>
              <td className="px-4 py-2 text-center">{acc.country}</td>
              <td className="px-4 py-2 text-center">{acc.company}</td>
              <td className="px-4 py-2 text-center">{acc.balance}</td>
              <td className="px-4 py-2 text-center">{acc.credit}</td>
              <td className="px-4 py-2 text-center">{acc.leverage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TradingAccounts; 