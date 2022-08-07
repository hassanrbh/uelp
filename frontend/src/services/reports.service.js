import axios from "axios";
import authHeader from "./auth_header";
import { API_URL, EndPoint } from "../consts";

class reportService {
  async report(business_slug, question_id, answer_slug, reportData) {
    const { data } = await axios.get(
      API_URL + EndPoint(business_slug, question_id, answer_slug) + "/reports",
      reportData,
      {
        headers: authHeader(),
      }
    );

    return data;
  }
}

export default new reportService();
