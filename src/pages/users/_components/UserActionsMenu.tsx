import { useState, useRef, useEffect } from "react";
import "./userActionsMenu.scss";
import type { User } from "@/types/user.type";
import { useNavigate } from "react-router";

interface UserActionsMenuProps {
  user: User;
}

export const UserActionsMenu = ({ user }: UserActionsMenuProps) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
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

  const handleViewDetails = () => {
    console.log("View details for user:", user);
    navigate(`/users/${user.id}`);
    setIsOpen(false);
  };

  const handleBlacklist = () => {
    console.log("Blacklist user:", user);
    setIsOpen(false);
  };

  const handleActivate = () => {
    console.log("Activate user:", user);
    setIsOpen(false);
  };

  return (
    <div className="user-actions-menu" ref={menuRef}>
      <button
        className="menu-trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="User actions"
      >
        <svg
          width="4"
          height="16"
          viewBox="0 0 4 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2" cy="2" r="2" fill="#545F7D" />
          <circle cx="2" cy="8" r="2" fill="#545F7D" />
          <circle cx="2" cy="14" r="2" fill="#545F7D" />
        </svg>
      </button>

      {isOpen && (
        <div className="menu-dropdown">
          <button className="menu-item" onClick={handleViewDetails}>
            <img src="/icons/view-user.svg" alt="view" />

            <span>View Details</span>
          </button>

          <button className="menu-item" onClick={handleBlacklist}>
            <img src="/icons/blacklist-user.svg" alt="view" />

            <span>Blacklist User</span>
          </button>

          <button className="menu-item" onClick={handleActivate}>
            <img src="/icons/activate-user.svg" alt="view" />

            <span>Activate User</span>
          </button>
        </div>
      )}
    </div>
  );
};
