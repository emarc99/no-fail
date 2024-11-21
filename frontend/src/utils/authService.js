import api from "../api";

export const authService = {
  login: async (credentials) => {
    const response = await api.post("/auth/login", {
      email: credentials.email,
      password: credentials.password,
    });
    return response.data;
  },

  register: async (userData) => {
    const response = await api.post("/auth/signup", {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      confirmPassword: userData.password,
      cacNumber: userData.cacNumber,
      businessName: userData.businessName,
    });
    return response.data;
  },
};
