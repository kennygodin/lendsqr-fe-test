import type { ColumnDef } from "@tanstack/react-table";
import "./userColumn.scss";
import { UserFilterPopup } from "./UserFilterPopup";
import type { User } from "@/types/user.type";
import { UserActionsMenu } from "./UserActionsMenu";

export const UserColumn: ColumnDef<User>[] = [
  {
    accessorKey: "organization",
    header: () => (
      <div className="column-header">
        <span>Organization</span>
        <UserFilterPopup columnId="organization" />
      </div>
    ),
    cell: ({ row }) => {
      const organization = row.original.organization || "N/A";
      return (
        <div className="cell-content">
          <span className="text-default">{organization}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "username",
    header: () => (
      <div className="column-header">
        <span>Username</span>
        <UserFilterPopup columnId="username" />
      </div>
    ),
    cell: ({ row }) => {
      const username = row.original.username || "N/A";
      return (
        <div className="cell-content">
          <span className="text-default">{username}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: () => (
      <div className="column-header">
        <span>Email</span>
        <UserFilterPopup columnId="email" />
      </div>
    ),
    cell: ({ row }) => {
      const email = row.original.email || "N/A";
      return (
        <div className="cell-content">
          <span className="text-default">{email}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "phoneNumber",
    header: () => (
      <div className="column-header">
        <span>Phone Number</span>
        <UserFilterPopup columnId="phoneNumber" />
      </div>
    ),
    cell: ({ row }) => {
      const phoneNumber = row.original.phoneNumber || "N/A";
      return (
        <div className="cell-content">
          <span className="text-default">{phoneNumber}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "dateJoined",
    header: () => (
      <div className="column-header">
        <span>Date Joined</span>
        <UserFilterPopup columnId="dateJoined" />
      </div>
    ),
    cell: ({ row }) => {
      const dateJoined = row.original.dateJoined;
      const formatted = dateJoined
        ? new Date(dateJoined).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
          })
        : "N/A";

      return (
        <div className="cell-content">
          <span className="text-default">{formatted}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => (
      <div className="column-header">
        <span>Status</span>
        <UserFilterPopup columnId="status" />
      </div>
    ),
    cell: ({ row }) => {
      const status = row.original.status || "Inactive";
      const statusClass =
        status === "Active"
          ? "status-active"
          : status === "Pending"
          ? "status-pending"
          : status === "Blacklisted"
          ? "status-blacklisted"
          : "status-inactive";

      return (
        <div className="cell-content">
          <span className={`status-badge ${statusClass}`}>{status}</span>
        </div>
      );
    },
  },
  {
    id: "actions",
    header: () => <div className="column-header"></div>,
    cell: ({ row }) => {
      const user = row.original;
      return (
        <div className="cell-content actions-cell">
          <UserActionsMenu user={user} />
        </div>
      );
    },
    enableSorting: false,
  },
];
