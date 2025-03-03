import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import UsersTable from "./components/UsersTable";
import DashboardCards from "./components/DashboardCards";
import "./App.css";

const App = () => {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <Navbar />
        <div className="stats-container">
          <DashboardCards/>
        </div>
        <div className="content-container">
          <UsersTable />
        </div>
      </div>
    </div>
  );
};

export default App;
