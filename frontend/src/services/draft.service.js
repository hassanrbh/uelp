import axios from 'axios';
import authHeader from './auth_header';

const API_URL = 'http://localhost:3000/api/v1';

class draftService {
  async draftReview(business_slug, draftData) {
    const { data } = await axios.post(
      API_URL + `/businesses/${business_slug}/drafts`,
      draftData,
      {
        headers: authHeader()
      }
    );

    return data;
  }

  async showDrafts(business_slug) {
    const { data } = await axios.get(
      API_URL + `/businesses/${business_slug}/drafts`,
      {
        headers: authHeader()
      }
    );

    return data;
  }

  async deleteDraft(business_slug, draft_id) {
    const { data } = await axios.delete(
      API_URL + `/businesses/${business_slug}/drafts/${draft_id}`,
      {
        headers: authHeader()
      }
    );

    return data;
  }
}

export default new draftService();
