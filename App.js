// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Inventory from './components/Inventory';
import Orders from './components/Orders';
import Returns from './components/Returns';
import Customers from './components/Customers';
import ChannelIntegrations from './components/ChannelIntegrations';
import Calculators from './components/Calculators';
import Reports from './components/Reports';
import Account from './components/Account';
import './styles/App.css'; // Import the global CSS file

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/returns" element={<Returns />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/channel-integrations" element={<ChannelIntegrations />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
