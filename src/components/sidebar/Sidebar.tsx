import "./sidebar.scss";
import { useLocation, useNavigate } from "react-router";
import { useState, useEffect } from "react";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsCollapsed(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuSections = [
    {
      title: "customers",
      items: [
        {
          name: "Users",
          icon: "/icons/user-friends.svg",
          path: "/users",
          isActive: pathname.includes("/users"),
        },
        {
          name: "Guarantors",
          icon: "/icons/users3.svg",
          path: "/guarantors",
          isActive: pathname.includes("/guarantors"),
        },
        {
          name: "Loans",
          icon: "/icons/sack.svg",
          path: "/loans",
          isActive: pathname.includes("/loans"),
        },
        {
          name: "Decision Models",
          icon: "/icons/decision.svg",
          path: "/decision",
          isActive: pathname.includes("/decision"),
        },
        {
          name: "Savings",
          icon: "/icons/piggy-bank.svg",
          path: "/savings",
          isActive: pathname.includes("/savings"),
        },
        {
          name: "Loan Requests",
          icon: "/icons/loan.svg",
          path: "/loan-requests",
          isActive: pathname.includes("/loan-requests"),
        },
        {
          name: "Whitelist",
          icon: "/icons/user-check.svg",
          path: "/whitelist",
          isActive: pathname.includes("/whitelist"),
        },
        {
          name: "Karma",
          icon: "/icons/user-times.svg",
          path: "/karma",
          isActive: pathname.includes("/karma"),
        },
      ],
    },
    {
      title: "businesses",
      items: [
        {
          name: "Organization",
          icon: "/icons/briefcase.svg",
          path: "/organization",
          isActive: pathname.includes("/organization"),
        },
        {
          name: "Loan Product",
          icon: "/icons/loan.svg",
          path: "/loan-product",
          isActive: pathname.includes("/loan-product"),
        },
        {
          name: "Saving Product",
          icon: "/icons/savings.svg",
          path: "/saving-product",
          isActive: pathname.includes("/saving-product"),
        },
        {
          name: "Fee and Charges",
          icon: "/icons/fees.svg",
          path: "/fee-charges",
          isActive: pathname.includes("/fee-charges"),
        },
        {
          name: "Transactions",
          icon: "/icons/transaction.svg",
          path: "/transactions",
          isActive: pathname.includes("/transactions"),
        },
        {
          name: "Services",
          icon: "/icons/galaxy.svg",
          path: "/services",
          isActive: pathname.includes("/services"),
        },
        {
          name: "Service Accounts",
          icon: "/icons/user-cog.svg",
          path: "/service-accounts",
          isActive: pathname.includes("/service-accounts"),
        },
        {
          name: "Settlements",
          icon: "/icons/scroll.svg",
          path: "/settlements",
          isActive: pathname.includes("/settlements"),
        },
        {
          name: "Reports",
          icon: "/icons/chart-bar.svg",
          path: "/reports",
          isActive: pathname.includes("/reports"),
        },
      ],
    },
    {
      title: "settings",
      items: [
        {
          name: "Preferences",
          icon: "/icons/sliders.svg",
          path: "/preferences",
          isActive: pathname.includes("/preferences"),
        },
        {
          name: "Fees and Pricing",
          icon: "/icons/badge-percent.svg",
          path: "/fees-pricing",
          isActive: pathname.includes("/fees-pricing"),
        },
        {
          name: "Audit Logs",
          icon: "/icons/clipboard-list.svg",
          path: "/audit-logs",
          isActive: pathname.includes("/audit-logs"),
        },
        {
          name: "Systems Messages",
          icon: "/icons/settings.svg",
          path: "/messages",
          isActive: pathname.includes("/messages"),
        },
      ],
    },
  ];

  return (
    <div className={`sidebar-container ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <img
          src={isCollapsed ? "/lendsqr.svg" : "/images/logo.svg"}
          alt="lendsqr"
        />
      </div>

      <div className="sidebar-main">
        <div className="switch-organization">
          <img src="/icons/briefcase.svg" alt="briefcase" />
          {!isCollapsed && <p>Switch Organization</p>}
          {!isCollapsed && <img src="/icons/drop-arrow.svg" alt="arrow-down" />}
        </div>

        <div className="dashboard">
          <img src="/icons/home.svg" alt="home" />
          {!isCollapsed && <p>Dashboard</p>}
        </div>

        <div className="sidebar-items">
          {menuSections.map((section) => (
            <section key={section.title}>
              {!isCollapsed && <p className="section-title">{section.title}</p>}

              <div className="item-list">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className={`menu-item ${item.isActive ? "active" : ""}`}
                    onClick={() => navigate(item.path)}
                    title={isCollapsed ? item.name : ""}
                  >
                    <img src={item.icon} alt="" />
                    {!isCollapsed && <p>{item.name}</p>}
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-footer-logout">
            <img src="/icons/logout.svg" alt="logout" />
            {!isCollapsed && <p className="logout-text">Logout</p>}
          </div>

          {!isCollapsed && <p className="sidebar-footer-version">v1.2.0</p>}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
