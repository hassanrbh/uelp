import axios from "axios";
import authHeader from "./auth_header";
import { API_URL } from "../consts";

class shareService {
  async share(business_slug, post_data) {
    const { data } = await axios.post(
      API_URL + `${business_slug}/share`,
      post_data,
      { headers: authHeader() }
    );

    return data;
  }
}

export default new shareService();
