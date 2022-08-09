export const API_URL = 'http://localhost:3000/api/v1/businesses/';
export const EndPoint = (business_slug, question_id, answer_slug) => {
  return `${business_slug}/questions/${question_id}/answers/${answer_slug}`;
};
