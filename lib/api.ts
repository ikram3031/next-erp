import { ProductsResponse } from "./types";

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

interface FetchProductsParams {
  limit?: number;
  skip?: number;
}

export const fetchProducts = async ({
  limit = 10,
  skip = 0,
}: FetchProductsParams): Promise<ProductsResponse> => {
  console.log("Fetching products with limit:", limit, "and skip:", skip);
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  return res.json();
};
