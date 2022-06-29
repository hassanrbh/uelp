import axios from "axios";
import authHeader from "./auth_header";

const API_URL = "https://localhost:3000/api/v1"

class UserService {
  getUser() {
    return axios.get(API_URL + "current_user", {
      headers: authHeader()
    });
  }
}

export default new UserService();