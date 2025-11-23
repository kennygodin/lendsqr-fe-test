import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="search-container">Search</div>

      <div className="nav-items">
        <div className="nav-item">
          <img src="/icons/headphones.svg" alt="" />
          <p>Helpdesk</p>
        </div>

        <div className="nav-item">
          <img src="/icons/bell-outline.svg" alt="" />
          <p>Notifications</p>
        </div>

        <div className="nav-item">
          <img src="/icons/cog-outline.svg" alt="" />
          <p>Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
