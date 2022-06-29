import axios from "axios";

const API_URL = "https://localhost:3000/user/"

class AuthService {
  login(email,password) {
    return axios.post(API_URL + "/login", {
      email,
      password,
    })
    .then(response => {
      if (response.message.code === 200) {
        this.setUser();
        this.setToken();
      }
      return response.data;
    })
  }
  setToken(res) {
    localStorage.setItem("token", JSON.stringify(res.headers.get("Authorization")));
  }
  setUser(res) {
    localStorage.setItem("user", JSON.stringify(res.data.current_user));
  }
  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }
  register(
    email,
    password,
    password_confirmation,
    f_name,
    l_name,
    zip_code,
    birth_date,
    gender,
    phone_number
    ) {
    return axios.post(API_URL, {
      email,
      password,
      password_confirmation,
      first_name: f_name,
      last_name: l_name,
      zip_code,
      birth_date,
      gender,
      phone_number,
    })
    .then(response => {
      this.setUser();
      this.setToken();
    }) 
  }
  getCurrentUser() {
    return {
      current_user: JSON.parse(localStorage.getItem("user")),
      jwt: JSON.parse(localStorage.getItem("token")),
    }
  }
}

export default new AuthService();