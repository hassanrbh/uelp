import axios from 'axios';
import authHeader from './auth_header';

const API_URL = 'http://localhost:3000/api/v1';
const EndPoint = (business_slug, question_id) => {
  return `/businesses/${business_slug}/questions/${question_id}`;
};

class answersService {
  async getNotifications() {
    const { data } = await axios.get(API_URL + `/notifies`, {
      headers: authHeader()
    });

    return data;
  }
  async postAnswer(business_slug, question_id, postData) {
    const { data } = await axios.post(
      API_URL + EndPoint(business_slug, question_id) + '/answers',
      postData,
      {
        headers: authHeader()
      }
    );

    return data;
  }
  async getSortAnswers(business_slug, question_id, sort_by) {
    const { data } = await axios.get(
      API_URL + EndPoint(business_slug, question_id) + `/answers/${sort_by}`,
      {
        headers: authHeader()
      }
    );

    return data;
  }
}

export default new answersService();
