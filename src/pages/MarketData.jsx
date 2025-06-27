import React from "react";

const MarketData = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm flex flex-col items-center">
        <img src="/1737625911306-ff20c204-5c62-45b0-ad13-d7c79f65739a_1.jpg" alt="Heddge Capitals" className="h-10 w-10 object-contain mb-2" />
        <h2 className="text-lg font-semibold mb-6 text-center">Heddge Capital Admin Terminal</h2>
        <form className="w-full space-y-4">
          <div>
            <label className="block font-bold mb-1">Server IP:</label>
            <input type="text" className="w-full border rounded px-3 py-2" value="Default IP is set" readOnly />
          </div>
          <div>
            <label className="block font-bold mb-1">Server Port:</label>
            <input type="text" className="w-full border rounded px-3 py-2" value="443" readOnly />
          </div>
          <div>
            <label className="block font-bold mb-1">Login:</label>
            <input type="text" className="w-full border rounded px-3 py-2" value="1029" readOnly />
          </div>
          <div>
            <label className="block font-bold mb-1">Password:</label>
            <input type="password" className="w-full border rounded px-3 py-2" value="...." readOnly />
          </div>
          <div className="flex justify-between pt-4">
            <button type="button" className="px-4 py-2 rounded border bg-white hover:bg-blue-50 shadow">Save</button>
            <button type="button" className="px-4 py-2 rounded border bg-white hover:bg-blue-50 shadow">Reset to Default</button>
            <button type="button" className="px-4 py-2 rounded border bg-white hover:bg-blue-50 shadow">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MarketData; 