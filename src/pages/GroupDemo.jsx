import React from "react";

const demoData = [
  { login: "2001", name: "Desktop Test", group: "demo", country: "", company: "", balance: "4057.13", profit: 150.10, equity: "4207.23", margin: "108.06", credit: "0.00" },
  { login: "2002", name: "Test UAE", group: "demo", country: "", company: "", balance: "9892.64", profit: 2176.76, equity: "12069.40", margin: "670.85", credit: "0.00" },
  { login: "2048", name: "Test Fee Account", group: "demo", country: "UAE", company: "", balance: "337.11", profit: 0.00, equity: "337.11", margin: "0.00", credit: "0.00" },
];

const GroupDemo = () => {
  return (
    <div className="w-full max-w-7xl bg-white rounded-lg shadow p-6 mt-0">
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <label className="font-bold">Login:</label>
        <input type="text" placeholder="Login" className="border rounded px-2 py-1 text-sm" />
        <label className="font-bold ml-2">Group:</label>
        <input type="text" placeholder="Group" className="border rounded px-2 py-1 text-sm" />
        <label className="font-bold ml-2">Name:</label>
        <input type="text" placeholder="Name" className="border rounded px-2 py-1 text-sm" />
        <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Request</button>
      </div>
      {/* Table */}
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold">Login</th>
            <th className="px-4 py-2 text-left font-bold">Name</th>
            <th className="px-4 py-2 text-left font-bold">Group</th>
            <th className="px-4 py-2 text-left font-bold">Country</th>
            <th className="px-4 py-2 text-left font-bold">Company</th>
            <th className="px-4 py-2 text-left font-bold">Balance</th>
            <th className="px-4 py-2 text-left font-bold">Profit</th>
            <th className="px-4 py-2 text-left font-bold">Equity</th>
            <th className="px-4 py-2 text-left font-bold">Margin</th>
            <th className="px-4 py-2 text-left font-bold">Credit</th>
          </tr>
        </thead>
        <tbody>
          {demoData.map((row, idx) => (
            <tr key={idx} className="border-b">
              <td className="px-4 py-2 text-center">{row.login}</td>
              <td className="px-4 py-2 text-center">{row.name}</td>
              <td className="px-4 py-2 text-center">{row.group}</td>
              <td className="px-4 py-2 text-center">{row.country}</td>
              <td className="px-4 py-2 text-center">{row.company}</td>
              <td className="px-4 py-2 text-center">{row.balance}</td>
              <td className={`px-4 py-2 text-center font-bold ${row.profit > 0 ? 'text-green-600' : row.profit === 0 ? 'text-red-600' : ''}`}>{row.profit.toFixed(2)}</td>
              <td className="px-4 py-2 text-center">{row.equity}</td>
              <td className="px-4 py-2 text-center">{row.margin}</td>
              <td className="px-4 py-2 text-center">{row.credit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GroupDemo; 