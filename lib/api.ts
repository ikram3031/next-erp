export const apiFetch = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(`https://dummyjson.com${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    throw new Error("API Error");
  }

  return res.json();
};
