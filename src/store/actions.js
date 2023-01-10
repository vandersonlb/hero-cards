import axios from "@/services"

export default {
  getHeroList({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('/hero')
        .then(response => {
          commit('GET_HERO_LIST', response.data.records)
          resolve()
        })
        .catch(error => reject("Erro ao inserir a lista de heróis no state. \n" + error))
    })
  },

  addHero({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios.post('/hero', payload)
        .then(response => {
          commit("ADD_HERO", response.data.fields)
          resolve()
        })
        .catch(error => reject("Erro ao adicionar um novo herói. \n" + error))
    })
  },

  updateHero({ commit }, { id, data }) {
    return new Promise((resolve, reject) => {
      axios.put('/hero/' + id, data)
        .then(response => {
          commit("UPDATE_HERO", response.data.fields)
          resolve()
        })
        .catch(error => reject("Erro ao editar um herói. \n" + error))
    })
  },

  deleteHero({ commit }, id) {
    return new Promise((resolve, reject) => {
      axios.delete('/hero/' + id)
        .then(response => {
          commit("DELETE_HERO", response.data)
          resolve()
        })
        .catch(error => reject("Erro ao deletar um herói. \n" + error))
    })
  }
}
