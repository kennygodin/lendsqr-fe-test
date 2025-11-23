import { DataTable } from "@/components/data-table/DataTable";
import { UserColumn } from "./_components/UserColumn";
import UserCard from "./_components/UserCard";
import "./users.scss";
import type { User } from "@/types/user.type";
import { mockGetUsersResponse } from "@/services/mock/users";

const cardDetails = [
  {
    title: "Users",
    value: "2,453",
    icon: "/icons/users.svg",
    bgColor: "rgba(223, 24, 255, 1)",
  },
  {
    title: "Active Users",
    value: "2,453",
    icon: "/icons/active-users.svg",
    bgColor: "rgba(87, 24, 255, 1)",
  },
  {
    title: "Users with loans",
    value: "12,453",
    icon: "/icons/user-loan.svg",
    bgColor: "rgba(245, 95, 68, 1)",
  },
  {
    title: "Users with savings",
    value: "102,453",
    icon: "/icons/user-savings.svg",
    bgColor: "rgba(255, 51, 102, 1)",
  },
];

const UsersPage = () => {
  return (
    <div className="users-container">
      <h1>Users</h1>

      <div className="user-card-container">
        {cardDetails.map((item) => (
          <UserCard
            key={item.title}
            icon={item.icon}
            label={item.title}
            value={item.value}
            bgColor={item.bgColor}
          />
        ))}
      </div>

      <div className="users-table-section">
        <DataTable<User, unknown>
          columns={UserColumn}
          data={mockGetUsersResponse.data.users}
          notFoundMainText="No users found"
          notFoundSubText="There are no users yet."
        />
      </div>
    </div>
  );
};

export default UsersPage;
