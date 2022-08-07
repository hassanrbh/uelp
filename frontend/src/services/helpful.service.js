import axios from "axios";
import authHeader from "./auth_header";
import { API_URL, EndPoint } from "../consts";

class helpfulService {
  async all(business_slug, question_id, answer_slug) {
    const { data } = await axios.get(
      API_URL +
        EndPoint(business_slug, question_id, answer_slug) +
        "/help_fuls",
      {
        headers: authHeader(),
      }
    );

    return data;
  }

  async helpful(business_slug, question_id, answer_slug, helpfulData) {
    const { data } = await axios.get(
      API_URL + EndPoint(business_slug, question_id, answer_slug) + "/helpful",
      helpfulData,
      {
        headers: authHeader(),
      }
    );

    return data;
  }

  async unhelpful(business_slug, question_id, answer_slug, UnHelpFulData) {
    const { data } = await axios.get(
      API_URL +
        EndPoint(business_slug, question_id, answer_slug) +
        "/unhelpful",
      UnHelpFulData,
      {
        headers: authHeader(),
      }
    );

    return data;
  }
}

export default new helpfulService();
