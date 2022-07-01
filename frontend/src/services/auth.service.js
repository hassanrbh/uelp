import axios from "axios";
import authHeader from "./auth_header";

const API_URL = "http://localhost:3000/api/v1";

class UserService {
  async getUser() {
    const resp = await fetch(API_URL + "/current_user", {
      headers: authHeader(),
    });
    return resp.json();
  }
  getBusinesses(limit) {
    return axios.get(API_URL + `/businesses?limit=${limit}`, {
      headers: authHeader(),
    });
  }
  getBusiness(slug) {
    return axios.get(API_URL + `/businesses/${slug}`, {
      headers: authHeader(),
    });
  }
}

export default new UserService();
