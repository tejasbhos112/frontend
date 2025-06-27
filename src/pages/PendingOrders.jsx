import React from "react";

const PendingOrders = () => {
  return (
    <div className="w-full max-w-5xl bg-white rounded-lg shadow p-6 mt-0">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold">Login</th>
            <th className="px-4 py-2 text-left font-bold">Order</th>
            <th className="px-4 py-2 text-left font-bold">Symbol</th>
            <th className="px-4 py-2 text-left font-bold">Type</th>
            <th className="px-4 py-2 text-left font-bold">Volume</th>
            <th className="px-4 py-2 text-left font-bold">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            {Array(6).fill('-').map((cell, idx) => (
              <td key={idx} className="px-4 py-2 text-center">{cell}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PendingOrders; 