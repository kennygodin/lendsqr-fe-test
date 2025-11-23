import { fetchUsers } from "@/services/user.service";
import type { GetUsersResponse } from "@/types/user.type";
import { useQuery, type UseQueryOptions } from "@tanstack/react-query";

export const useGetUsers = (
  enabled = true,
  options?: Omit<
    UseQueryOptions<GetUsersResponse, Error>,
    "queryKey" | "queryFn"
  >
) => {
  return useQuery<GetUsersResponse, Error>({
    queryKey: ["users"],
    queryFn: () => fetchUsers(),
    enabled,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 30,
    ...options,
  });
};
