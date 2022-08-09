import axios from 'axios';
import authHeader from './auth_header';

const API_URL = 'http://localhost:3000/api/v1';

class answersService {
  async getNotifications() {
    const { data } = await axios.get(API_URL + `/notifies`, {
      headers: authHeader()
    });

    return data;
  }
  async postAnswer(business_slug, question_id, postData) {
    const { data } = await axios.post(
      API_URL + `/businesses/${business_slug}/questions/${question_id}/answers`,
      postData,
      {
        headers: authHeader()
      }
    );

    return data;
  }
}

export default new answersService();
