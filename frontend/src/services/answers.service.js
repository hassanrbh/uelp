import axios from "axios";
import authHeader from "./auth_header";
import { API_URL } from "../consts";

class answersService {
  async getNotifications() {
    const { data } = await axios.get(API_URL + `/notifies`, {
      headers: authHeader(),
    });

    return data;
  }
}

export default new answersService();
