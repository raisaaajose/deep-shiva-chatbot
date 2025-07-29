import axios from "axios";

const baseURL =
  process.env.NEXT_PUBLIC_API_URL || "https://api.shivaay.upayan.dev";

const instance = axios.create({
  baseURL,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = sessionStorage.getItem("token");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

export { baseURL };
export default instance;
