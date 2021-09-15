import axios from "axios";

export default {
  getAllGroups() {
    return axios
      .get(`/editoras/`)
      .then((response) => response.data)
      .catch((error) => error);
  },

  getHeroesByGroup(groupId) {
    return axios
      .get(`/herois?editora=${groupId}`)
      .then((response) => response.data)
      .catch((error) => error);
  },
};
