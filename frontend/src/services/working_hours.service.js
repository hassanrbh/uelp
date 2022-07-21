import axios from "axios";
import authHeader from "./auth_header";

const API_URL = "http://localhost:3000/api/v1/businesses/";

class WorkingHours {
  async getWorkingHours(business_slug) {
    const { data } = await axios.get(API_URL + `${business_slug}/working_hours`, {
      headers: authHeader(),
    });
    console.log(data)
    return data;
  }
}

export default new WorkingHours();
