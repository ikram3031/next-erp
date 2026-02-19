import { apiFetch } from "./api";

export const login = async (username: string, password: string) => {
  return apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30,
    }),
  });
};
