import axios from "axios";
const url = "http://localhost:3000";

export default {
  getAllGroups() {
    return axios
      .get(`${url}/grupos/`)
      .then((response) => response.data)
      .catch((error) => error);
  },

  getHeroesByGroup(grupoId) {
    return axios
      .get(`${url}/herois/grupo/${grupoId}`)
      .then((response) => response.data)
      .catch((error) => error);
  },
};
