import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0",
});

export const socialAPI = {
  async getAllUsers() {
    const response = await instance.get("users");
    return response;
  },

  async getProfile(id) {
    const response = await instance.get(`/profile/${id}`);
    return response;
  },
};
