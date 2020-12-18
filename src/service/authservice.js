import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  login(email, password) {
    return axios
      .post(API_URL + "signin", { email, password })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(jogosultsag, email, jelszo,vezeteknev,keresztnev,szuletesi_datum,nem) {
    return axios.post(API_URL + "signup", {
      jogosultsag,
      email,
      jelszo,
      vezeteknev,
      keresztnev,
      szuletesi_datum,
      nem,
    });
  }
}

export default new AuthService();