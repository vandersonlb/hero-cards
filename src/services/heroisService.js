import axios from "axios";
const url = "http://localhost:3000";

export default {
  getAllHeroes() {
    return axios
      .get(`${url}/herois`)
      .then((response) => response.data)
      .catch((error) => error);
  },

  getHero(heroiId) {
    return axios
      .get(`${url}/heroi/${heroiId}`)
      .then((response) => response.data)
      .catch((error) => error);
  },

  addHero(heroi) {
    return axios
      .post(`${url}/herois`, heroi)
      .then((response) => response.data)
      .catch((error) => error);
  },

  deleteHero(heroiId) {
    return axios
      .delete(`${url}/heroi/${heroiId}`)
      .then((response) => response.data)
      .catch((error) => error);
  },
};
