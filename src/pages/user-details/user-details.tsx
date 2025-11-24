import "./user-details.scss";

import { Outlet, useNavigate, useParams, useLocation } from "react-router";
import { useState } from "react";
import type { User } from "@/types/user.type";
import { UserDetailsHeader } from "./_components/UserHeaderDetails";

const UserDetailsPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();

  const [user] = useState<User | null>(() => {
    const stored = localStorage.getItem("selected_user");
    if (stored) {
      const parsed = JSON.parse(stored) as User;
      if (parsed.id?.toString() === id) {
        return parsed;
      }
    }
    return null;
  });

  const getActiveTab = () => {
    const path = location.pathname;
    if (path.includes("/documents")) return "documents";
    if (path.includes("/bank-details")) return "bank-details";
    if (path.includes("/loans")) return "loans";
    if (path.includes("/savings")) return "savings";
    if (path.includes("/app-system")) return "app-system";
    return "general";
  };

  const activeTab = getActiveTab();

  const handleTabClick = (tab: string) => {
    if (tab === "general") {
      navigate(`/users/${id}`);
    } else {
      navigate(`/users/${id}/${tab}`);
    }
  };

  if (!user) {
    return (
      <div className="user-details-container">
        <button onClick={() => navigate(-1)} className="back-button">
          <img src="/icons/arrow-back.svg" alt="back-arrow" />
          <span>Back to Users</span>
        </button>

        <p>User info missing — try selecting a user again.</p>
      </div>
    );
  }

  return (
    <div className="user-details-container">
      <button onClick={() => navigate(-1)} className="back-button">
        <img src="/icons/arrow-back.svg" alt="back-arrow" />
        <span>Back to Users</span>
      </button>

      <div className="user-top">
        <h1>User Details</h1>

        <div className="buttons">
          <button className="blacklist">
            <span>Blacklist User</span>
          </button>
          <button className="activate">
            <span>Activate User</span>
          </button>
        </div>
      </div>

      <div className="user-header">
        <UserDetailsHeader user={user} />
        <div className="user-header-tabs">
          <button
            className={`tab-button ${activeTab === "general" ? "active" : ""}`}
            onClick={() => handleTabClick("general")}
          >
            General Details
          </button>
          <button
            className={`tab-button ${
              activeTab === "documents" ? "active" : ""
            }`}
            onClick={() => handleTabClick("documents")}
          >
            Documents
          </button>
          <button
            className={`tab-button ${
              activeTab === "bank-details" ? "active" : ""
            }`}
            onClick={() => handleTabClick("bank-details")}
          >
            Bank Details
          </button>
          <button
            className={`tab-button ${activeTab === "loans" ? "active" : ""}`}
            onClick={() => handleTabClick("loans")}
          >
            Loans
          </button>
          <button
            className={`tab-button ${activeTab === "savings" ? "active" : ""}`}
            onClick={() => handleTabClick("savings")}
          >
            Savings
          </button>
          <button
            className={`tab-button ${
              activeTab === "app-system" ? "active" : ""
            }`}
            onClick={() => handleTabClick("app-system")}
          >
            App and System
          </button>
        </div>
      </div>

      <div className="outlet">
        <Outlet
          context={{
            user: user,
          }}
        />
      </div>
    </div>
  );
};

export default UserDetailsPage;
