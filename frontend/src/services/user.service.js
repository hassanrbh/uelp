import axios from "axios";

const API_URL = "http://localhost:3000/user";

class AuthService {
  async login(email, password) {
    const resp = await fetch(API_URL + "/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    });
    this.setToken(resp);
    return resp.json();
  }
  setToken(res) {
    localStorage.setItem("token", res.headers.get("Authorization"));
  }
  logout() {
    localStorage.removeItem("token");
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
    return axios
      .post(API_URL, {
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
      .then((response) => {
        this.setUser();
        this.setToken();
      });
  }
  getCurrentUser() {
    return {
      jwt: JSON.parse(localStorage.getItem("token")),
    };
  }
}

export default new AuthService();
