import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="search-container">
        <input type="text" placeholder="Search for anything" />
        <button>
          <img src="/icons/search.svg" alt="search" />
        </button>
      </div>

      <div className="nav-items">
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
    </div>
  );
};

export default Navbar;
