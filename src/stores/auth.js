import { loginService } from "../services/auth.service";
import { defineStore } from "pinia";

export function useAuthStore() {
  return defineStore("auth", {
    state: () => ({
      isAuthenticated: false,
      user: null,
    }),
    actions: {
      login({ username, password }) {
        this.isAuthenticated = loginService(username, password);
      },
    },
  })();
}
