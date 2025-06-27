import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const sidebarData = [
  {
    label: "Login",
    children: [
      { label: "Account" },
      { label: "Register" },
    ],
  },
  {
    label: "Accounts",
    children: [
      { label: "Trading Accounts" },
      { label: "Online User" },
      { label: "Managers" },
      { label: "Pending Orders" },
    ],
  },
  {
    label: "Clients & Orders & Deals",
    children: [
      { label: "Positions" },
      { label: "Orders" },
      { label: "Deals" },
    ],
  },
  { label: "Holidays" },
  { label: "Intelligent Dealing" },
  { label: "Market Data" },
  {
    label: "Group",
    children: [
      { label: "Demo" },
    ],
  },
];

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});
  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();

  const handleSectionClick = (label) => {
    setOpenSections((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const handleItemClick = (label) => {
    setActiveItem(label);
    if (label === "Account") {
      navigate("/account");
    } else if (label === "Register") {
      navigate("/register");
    } else if (label === "Trading Accounts") {
      navigate("/trading-accounts");
    } else if (label === "Online User") {
      navigate("/online-user");
    } else if (label === "Managers") {
      navigate("/managers");
    } else if (label === "Pending Orders") {
      navigate("/pending-orders");
    } else if (label === "Positions") {
      navigate("/positions");
    } else if (label === "Orders") {
      navigate("/orders");
    } else if (label === "Deals") {
      navigate("/deals");
    } else if (label === "Holidays") {
      navigate("/holidays");
    } else if (label === "Intelligent Dealing") {
      navigate("/intelligent-dealing");
    } else if (label === "Market Data") {
      navigate("/market-data");
    } else if (label === "Demo") {
      navigate("/group-demo");
    }
    // Add more navigation logic for other sidebar items as needed
  };

  return (
    <aside className="w-64 h-screen bg-slate-50 text-gray-800 flex flex-col shadow-lg border-r border-slate-200">
      <div className="p-6 text-2xl font-bold tracking-wide border-b border-slate-200 mb-2 text-gray-700">Heddge Dashboard</div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="space-y-1">
          {sidebarData.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <div>
                  <button
                    className="w-full flex items-center justify-between px-4 py-2 hover:bg-slate-100 focus:outline-none rounded"
                    onClick={() => handleSectionClick(item.label)}
                  >
                    <span>{item.label}</span>
                    <span className="ml-2">{openSections[item.label] ? "-" : "+"}</span>
                  </button>
                  {openSections[item.label] && (
                    <ul className="ml-4 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <button
                            className={`w-full text-left px-4 py-2 rounded hover:bg-slate-200 ${
                              activeItem === child.label ? "bg-slate-200 font-semibold text-blue-600" : ""
                            }`}
                            onClick={() => handleItemClick(child.label)}
                          >
                            {child.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <button
                  className={`w-full text-left px-4 py-2 rounded hover:bg-slate-100 ${
                    activeItem === item.label ? "bg-slate-100 font-semibold text-blue-600" : ""
                  }`}
                  onClick={() => handleItemClick(item.label)}
                >
                  {item.label}
                </button>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar; 