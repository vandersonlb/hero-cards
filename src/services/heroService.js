import axios from "axios";

export default {
  getAllHeroes() {
    return axios
      .get(`/herois`)
      .then((response) => response.data)
      .catch((error) => error);
  },

  getHero(heroiId) {
    return axios
      .get(`/herois/${heroiId}`)
      .then((response) => response.data)
      .catch((error) => error);
  },

  addHero(heroi) {
    return axios
      .post(`/herois`, heroi)
      .then((response) => response.data)
      .catch((error) => error);
  },

  updateHero(heroi) {
    return axios
      .put(`/herois/${heroi.id}`, heroi)
      .then((response) => response.data)
      .catch((error) => error);
  },

  deleteHero(heroiId) {
    return axios
      .delete(`/herois/${heroiId}`)
      .then((response) => response.data)
      .catch((error) => error);
  },
};
