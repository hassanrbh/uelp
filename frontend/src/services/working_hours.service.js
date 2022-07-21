import axios from "axios";
import authHeader from "./auth_header";

const API_URL = "http://localhost:3000/api/v1/businesses/";

class WorkingHour {
  async getWorkingHours(business_slug) {
    const { data } = axios.get(API_URL + `${business_slug}/working_hours`, {
      headers: authHeader(),
    });
    return data;
  }
}

export default WorkingHour;
