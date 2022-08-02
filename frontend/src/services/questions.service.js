import axios from "axios";
import authHeader from "./auth_header";

const API_URL = "http://localhost:3000/api/v1/businesses/";

class questionService {
  async getAll(business_slug, limit) {
    const { data } = await axios.get(
      API_URL + `${business_slug}/questions?limit=${limit}`,
      {
        headers: authHeader(),
      }
    );
    return data;
  }
  async getAnansweredQuestions(business_slug) {
    const { data } = await axios.get(
      API_URL + `${business_slug}/random_questions`,
      {
        headers: authHeader(),
      }
    );
    return data;
  }

  async getSortedData(business_slug, sorting_query, page) {
    const { data } = await axios.get(
      API_URL +
        `${business_slug}/questions?sort_by=${sorting_query}&page=${page}`,
      {
        headers: authHeader(),
      }
    );

    return data;
  }

  async getQuestionData({ question_id, business_slug }) {
    const { data } = await axios.get(
      API_URL + `${business_slug}/${question_id}`, {
        headers: authHeader()
      }
    );

    return data
  }

  async createQuestion(business_slug, question_data) {
    const { data } = await axios.post(
      API_URL + `${business_slug}/questions`,
      question_data,
      { headers: authHeader() }
    );
    return data;
  }
}

export default new questionService();
