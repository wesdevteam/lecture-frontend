import type { AccountType } from "@/types/account/account.type";
import axiosInstance from "../axios/axios-instance";

export const registerApi = async (data: Partial<AccountType>) => {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data;
};
