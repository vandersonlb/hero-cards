import axios from "axios";
// const url = "http://localhost:3000";

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
