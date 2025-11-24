export interface User {
  id: number;
  organization: string;
  username: string;
  email: string;
  phoneNumber: number;
  dateJoined: string | Date;
  status: "Active" | "Inactive" | "Pending" | "Blacklisted";

  accountInfo: {
    accountBalance: string;
    accountNumber: string | number;
    bank: string;
    tier: number;
  };

  personalInfo: {
    fullName: string;
    phone: number;
    email: string;
    bvn: string | number;
    gender: "Male" | "Female";
    maritalStatus: string;
    children: number;
    typeOfResidence: string;
  };

  educationAndEmployment: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string;
    loanRepayment: number | string;
  };

  socials: {
    twitter: string;
    facebook: string;
    instagram: string;
  };

  guarantors: Array<{
    fullName: string;
    phone: number;
    email: string;
    relationship: string;
  }>;

  bankDetails: {
    accountNumber: string | number;
    bankName: string;
  };

  loans: {
    totalLoans: number;
    activeLoans: number;
  };

  savings: {
    totalSavings: string;
  };

  appAndSystem: {
    lastLogin: string | Date;
    ipAddress: string;
  };
}

export interface GetUsersResponse {
  success: boolean;
  status_code: number | string;
  message: string;
  data: {
    users: User[];
  };
}
