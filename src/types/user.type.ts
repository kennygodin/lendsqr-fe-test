export interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: number;
  dateJoined: string | Date;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";
}

export interface GetUsersResponse {
  success: boolean;
  status_code: number;
  message: string;
  data: {
    users: User[];
  };
}
