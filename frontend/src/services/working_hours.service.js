import axios from "axios";
import authHeader from "./auth_header";
import { API_URL } from "../consts";

class WorkingHours {
  async getWorkingHours(business_slug) {
    const { data } = await axios.get(
      API_URL + `${business_slug}/working_hours`,
      {
        headers: authHeader(),
      }
    );

    return data;
  }
}

export default new WorkingHours();
