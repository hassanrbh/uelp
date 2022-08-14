import axios from 'axios';
import authHeader from './auth_header';

const API_URL = 'http://localhost:3000/api/v1';

class reviewService {
  async createReview(business_slug, post_data) {
    const { data } = await axios.post(
      API_URL + `/businesses/${business_slug}/reviews`,
      post_data,
      {
        headers: authHeader()
      }
    );

    return data;
  }

  async getAllReviews(business_slug) {
    const { data } = await axios.get(
      API_URL + `/businesses/${business_slug}/reviews`,
      { headers: authHeader() }
    );

    return data;
  }
}

export default new reviewService();
