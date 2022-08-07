import axios from "axios";
import authHeader from "./auth_header";
import { API_URL } from "../consts";

class amentyService {
  async getIndex(business_slug) {
    const { data } = await axios.get(
      API_URL + `/businesses/${business_slug}/amentys`,
      {
        headers: authHeader(),
      }
    );
    return data;
  }
}

export default new amentyService();
