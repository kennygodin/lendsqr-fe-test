import "./navbar.scss";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="search-container">
        <input type="text" placeholder="Search for anything" />
        <button>
          <img src="/icons/search.svg" alt="search" />
        </button>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-items ${isMobileMenuOpen ? "mobile-open" : ""}`}>
        <div className="nav-item">
          <p className="docs">Docs</p>
        </div>

        <div className="nav-item">
          <img src="/icons/bell.svg" alt="bell" />
        </div>

        <div className="nav-item">
          <img src="/images/avatar.png" alt="avatar" />
          <p>Adedeji</p>
          <img src="/icons/cvr-arrow-down.svg" alt="cvr-arrow-down" />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={toggleMobileMenu}></div>
      )}
    </div>
  );
};

export default Navbar;
