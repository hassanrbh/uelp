import axios from "axios";
import authHeader from "./auth_header";

const API_URL = "http://localhost:3000/api/v1";

class amentyService {
  async getIndex(business_slug) {
    const { data } = await axios.get(API_URL + `/businesses/${business_slug}/amentys`, {
      headers: authHeader(),
    });
    return data;
  }
}

export default new amentyService();