import { useState, useRef, useEffect } from "react";
import "./userFilterPopup.scss";

interface UserFilterPopupProps {
  columnId: string;
}

export const UserFilterPopup = ({ columnId }: UserFilterPopupProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleFilter = () => {
    console.log("Filter applied for column:", columnId);
    setIsOpen(false);
  };

  const handleReset = () => {
    console.log("Filter reset for column:", columnId);
    setIsOpen(false);
  };

  return (
    <div className="user-filter-popup" ref={popupRef}>
      <button
        className="filter-trigger"
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        aria-label="Filter column"
      >
        <img src="/icons/filter.svg" alt="filter" />
      </button>

      {isOpen && (
        <div className="filter-dropdown">
          <div className="filter-form">
            <div className="form-group">
              <label>Organization</label>
              <input type="text" placeholder="Select" />
            </div>

            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="User" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Email" />
            </div>

            <div className="form-group">
              <label>Date</label>
              <input type="date" placeholder="Date" />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" placeholder="Phone Number" />
            </div>

            <div className="form-group">
              <label>Status</label>
              <select>
                <option value="">Select</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
                <option value="blacklisted">Blacklisted</option>
              </select>
            </div>

            <div className="filter-actions">
              <button className="reset-button" onClick={handleReset}>
                Reset
              </button>
              <button className="filter-button" onClick={handleFilter}>
                Filter
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
