import React from "react";

const IntelligentDealing = () => {
  return (
    <div className="w-full max-w-4xl bg-white rounded-lg shadow p-6 mt-0">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-bold">Name</th>
            <th className="px-4 py-2 text-left font-bold">Action</th>
            <th className="px-4 py-2 text-left font-bold">Dealers</th>
          </tr>
        </thead>
        <tbody>
          {[1,2,3].map((row) => (
            <tr key={row} className="border-b">
              {Array(3).fill('-').map((cell, idx) => (
                <td key={idx} className="px-4 py-2 text-center">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IntelligentDealing; 