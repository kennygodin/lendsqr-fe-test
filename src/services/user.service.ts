import type { GetUsersResponse } from "@/types/user.type";
import { mockGetUsersResponse } from "./mock/users";

export const fetchUsers = async (): Promise<GetUsersResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return mockGetUsersResponse;
};
