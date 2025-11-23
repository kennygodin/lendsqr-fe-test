import "./dashboard.scss";
import { Outlet } from "react-router";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        <div className="sidebar-wrapper">
          <Sidebar />
        </div>

        <div className="main-wrapper">
          <Navbar />

          <div className="content-wrapper">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
