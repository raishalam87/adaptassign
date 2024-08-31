// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css'; // Import the CSS file for Sidebar

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Dashboard</h2>
      <nav>
        <ul>
          <li><NavLink to="/inventory">Inventory</NavLink></li>
          <li><NavLink to="/orders">Orders</NavLink></li>
          <li><NavLink to="/returns">Returns</NavLink></li>
          <li><NavLink to="/customers">Customers</NavLink></li>
          <li><NavLink to="/channel-integrations">Channel Integrations</NavLink></li>
          <li><NavLink to="/calculators">Calculators</NavLink></li>
          <li><NavLink to="/reports">Reports</NavLink></li>
          <li><NavLink to="/account">Account</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
