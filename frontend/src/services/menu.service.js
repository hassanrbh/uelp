import axios from "axios";
import authHeader from "./auth_header";

const API_URL = "http://localhost:3000/api/v1/businesses/";

class Menu {
  async getAllMenus(business_slug) {
    const { data } = await axios.get(API_URL + `${business_slug}/menus`, {
      headers: authHeader(),
    });
    return data;
  }
  async getMenu(business_slug, menu_name) {
    const { data } = await axios.get(
      API_URL + `${business_slug}/menus/${menu_name}`,
      { headers: authHeader() }
    );
    return data;
  }
  async postMenu(business_slug, { name, price, ingredients }) {
    const { data } = await axios.post(
      API_URL + `${business_slug}/menus`,
      {
        menu: {
          name,
          price,
          ingredients,
        },
      },
      { headers: authHeader() }
    );

    return data;
  }
  async putMenu(business_slug, menu_name, update_data) {
    const { data } = await axios.put(
      API_URL + `${business_slug}/menus/${menu_name}`,
      {
        menu: {
          update_data
        },
      },
      { headers: authHeader() }
    );
    return data;
  }
  async deleteMenu(business_slug, menu_name) {
    const { data } = await axios.delete(
      API_URL + `${business_slug}/menus/${menu_name}`, {
        headers: authHeader()
      }
    )
    return data;
  }
}

export default new Menu();

