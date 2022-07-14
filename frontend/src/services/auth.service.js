import axios from "axios";
import authHeader from "./auth_header";

const API_URL = "http://localhost:3000/api/v1";

class UserService {
  async getUser() {
    try {
      const resp = await fetch(API_URL + "/current_user", {
        headers: authHeader(),
      });
      
      return resp.json();
    } catch (err) {
      console.log(err)
    }  
  }
  async getAnonymousUser(username) {
    const { data } = await axios.get(API_URL + `/yelper/${username}`)
    return data;
  }
  getBusinesses(limit) {
    return axios.get(API_URL + `/businesses?limit=${limit}`, {
      headers: authHeader(),
    });
  }
  async getBusiness(slug) {
    const {data} = await axios.get(API_URL + `/businesses/${slug}`, {
      headers: authHeader(),
    });
    return data;
  }
  editBusiness(slug, edited_business) {
    const {
      description,
      zip_code,
      city,
      state,
      country,
      address,
      address_1,
      address_2,
      phone_number,
      menu_web_address,
      min_price,
      max_price,
      categorie_name,
    } = edited_business;

    const { data } = axios.put(
      API_URL + `/business/${slug}`,
      {
        business: {
          description,
          zip_code,
          city,
          state,
          country,
          address,
          address_1,
          address_2,
          phone_number,
          menu_web_address,
          min_price,
          max_price,
          categorie_name,
        },
      },
      {
        headers: authHeader(),
      }
    );
    return data;
  }
  async getFilteredBusinessesby(name) {
    const { data } = await axios.get(
      API_URL + `/businesses?search_by_name=${name}`,
      {
        headers: authHeader(),
      }
    );
    return data;
  }
  async getLatestBusinesses() {
    const { data } = await axios.get(API_URL + "/latest", {
      headers: authHeader(),
    });
    return data;
  }
}

export default new UserService();
