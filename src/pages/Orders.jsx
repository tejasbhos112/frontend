import React from "react";

const Orders = () => {
  return (
    <div className="w-full max-w-7xl bg-white rounded-lg shadow p-6 mt-0">
      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <label className="font-bold">Login:</label>
        <input type="text" placeholder="Enter login" className="border rounded px-2 py-1 text-sm" />
        <label className="font-bold ml-2">Symbol:</label>
        <input type="text" placeholder="Enter symbol" className="border rounded px-2 py-1 text-sm" />
        <select className="border rounded px-2 py-1 text-sm">
          <option>All</option>
          <option>Open Only</option>
          <option>Close Only</option>
        </select>
        <select className="border rounded px-2 py-1 text-sm">
          <option>Today</option>
          <option>Last 3 days</option>
          <option>Last Week</option>
          <option>Last Month</option>
          <option>Last 3 months</option>
          <option>Last 6 months</option>
          <option>All history</option>
          <option>Custom</option>
        </select>
        <input type="date" className="border rounded px-2 py-1 text-sm" />
        <span>-</span>
        <input type="date" className="border rounded px-2 py-1 text-sm" />
        <button className="px-3 py-1 bg-gray-200 rounded border ml-2">Request</button>
        <button className="ml-auto px-2 py-1"><span role="img" aria-label="download">⭳</span></button>
      </div>
      {/* Table */}
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold">Time</th>
            <th className="px-4 py-2 text-left font-bold">Login</th>
            <th className="px-4 py-2 text-left font-bold">Order</th>
            <th className="px-4 py-2 text-left font-bold">Symbol</th>
            <th className="px-4 py-2 text-left font-bold">Type</th>
            <th className="px-4 py-2 text-left font-bold">Volume</th>
            <th className="px-4 py-2 text-left font-bold">Price</th>
            <th className="px-4 py-2 text-left font-bold">Comment</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            {Array(8).fill('-').map((cell, idx) => (
              <td key={idx} className="px-4 py-2 text-center">{cell}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Orders; 