import axios from "axios";
import authHeader from "./auth_header";

const API_URL = "http://localhost:3000/api/v1";

class answersService {
  async getNotifications() {
    const { data } = await axios.get(
      API_URL + `/notifies`, {
        headers: authHeader()
      }
    );

    return data;
  }
}

export default new answersService();