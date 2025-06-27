import React from 'react'
import Sidebar from './components/Sidebar'
import AccountForm from './pages/AccountForm'
import TradingAccounts from './pages/TradingAccounts'
import OnlineUser from './pages/OnlineUser'
import Managers from './pages/Managers'
import PendingOrders from './pages/PendingOrders'
import Positions from './pages/Positions'
import Orders from './pages/Orders'
import Deals from './pages/Deals'
import Holidays from './pages/Holidays'
import IntelligentDealing from './pages/IntelligentDealing'
import MarketData from './pages/MarketData'
import GroupDemo from './pages/GroupDemo'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-8">
          <Routes>
            <Route path="/" element={<OnlineUser />} />
            <Route path="/account" element={<AccountForm />} />
            <Route path="/trading-accounts" element={<TradingAccounts />} />
            <Route path="/online-user" element={<OnlineUser />} />
            <Route path="/managers" element={<Managers />} />
            <Route path="/pending-orders" element={<PendingOrders />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/holidays" element={<Holidays />} />
            <Route path="/intelligent-dealing" element={<IntelligentDealing />} />
            <Route path="/market-data" element={<MarketData />} />
            <Route path="/group-demo" element={<GroupDemo />} />
            {/* Add more routes here for other pages */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App