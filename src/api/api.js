import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  withCredentials: true,
  headers: {
    "API-KEY": "d2c9ec92-0989-483d-a1ee-eb58b5788265",
  },
});

export const socialAPI = {
  async getAllUsers(page) {
    const response = await instance.get(`users?page=${page}&count=100`);
    return response;
  },

  async getProfile(id) {
    const response = await instance.get(`/profile/${id}`);
    return response;
  },

  async login(body) {
    const response = await instance.post(`/auth/login`, body);
    return response;
  },

  async changeProfile(file) {
    const response = await instance.put(`/profile/photo`, file);
    return response;
  },

  async setStatus(status) {
    const response = await instance.put(`/profile/status`, status);
    return response;
  },
};
