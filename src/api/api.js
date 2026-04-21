import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
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

  async login (body){
    const response = await instance.post(`/auth/login`,body);
    return response;
  }
};
