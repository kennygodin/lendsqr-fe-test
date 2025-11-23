import { useState, useRef, useEffect } from "react";
import "./userActionsMenu.scss";
import type { User } from "@/types/user.type";

interface UserActionsMenuProps {
  user: User;
}

export const UserActionsMenu = ({ user }: UserActionsMenuProps) => {
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 3C4.5 3 1.73 5.11 1 8c.73 2.89 3.5 5 7 5s6.27-2.11 7-5c-.73-2.89-3.5-5-7-5zm0 8.5c-1.93 0-3.5-1.57-3.5-3.5S6.07 4.5 8 4.5s3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"
                fill="#545F7D"
              />
              <circle cx="8" cy="8" r="2" fill="#545F7D" />
            </svg>
            <span>View Details</span>
          </button>

          <button className="menu-item" onClick={handleBlacklist}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm3.5 9.59L10.09 12 8 9.91 5.91 12 4.5 10.59 6.59 8.5 4.5 6.41 5.91 5 8 7.09 10.09 5l1.41 1.41L9.41 8.5l2.09 2.09z"
                fill="#545F7D"
              />
            </svg>
            <span>Blacklist User</span>
          </button>

          <button className="menu-item" onClick={handleActivate}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm-1 10.59L3.91 8.5 5.32 7.09 7 8.77l3.68-3.68L12.09 6.5 7 11.59z"
                fill="#545F7D"
              />
            </svg>
            <span>Activate User</span>
          </button>
        </div>
      )}
    </div>
  );
};
