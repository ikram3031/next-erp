import { apiFetch } from "./api";

export const login = async (username: string, password: string) => {
  const data = await apiFetch("/auth/login", {
    method: "POST",
    body: JSON.stringify({
      username,
      password,
      expiresInMins: 30,
    }),
  });

  return data;
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem("accessToken");

  if (!token) throw new Error("No token");

  return apiFetch("/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const logout = () => {
  localStorage.removeItem("accessToken");
};
