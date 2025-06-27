import React from "react";

const OnlineUser = () => {
  return (
    <div className="w-full max-w-5xl bg-white rounded-lg shadow p-6 mt-0">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold">Login</th>
            <th className="px-4 py-2 text-left font-bold">Name</th>
            <th className="px-4 py-2 text-left font-bold">Address</th>
            <th className="px-4 py-2 text-left font-bold">Connection</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            {Array(4).fill('-').map((cell, idx) => (
              <td key={idx} className="px-4 py-2 text-center">{cell}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OnlineUser; 