import * as Vue from "vue"; // in Vue 3
import axios from "axios";
import VueAxios from "vue-axios";
import { useAuthStore } from "@/stores/auth";
import { computed } from "vue";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    jwt: localStorage.getItem("token")
      ? localStorage.getItem("token")
      : undefined,
  },
});
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers["jwt"] = `${token}`;
  }

  return config;
});
axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const authStore = useAuthStore();
    if (error.response?.status === 401 || error.response?.status === 403) {
      authStore.logout();
    }
    return Promise.reject(error);
  }
);
export default axiosInstance;
