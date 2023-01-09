import axios from "@/services"

export default {
  /** Pegando a lista de heróis em "banco" e inserindo no state **/
  setHeroList({commit}) {
    return new Promise((resolve, reject) => {
      axios.get('/hero?sort%5B0%5D%5Bfield%5D=id&sort%5B0%5D%5Bdirection%5D=asc')
        .then(response => {
          commit('GET_HERO_LIST', response.data.records)
          resolve()
        })
        .catch(error => reject("Erro ao inserir a lista de heróis no state. \n" + error))
      })
    },
    
    addHero({commit}, payload) {
      return new Promise((resolve, reject) => {
        // console.log(payload);
        axios.post('/hero', payload)
        .then(response => {
          commit("ADD_HERO", response.data.records)
          // console.log(response.data.records);
          resolve()
        })
        .catch(error => reject("Erro ao adicionar um novo herói. \n" + error))
      })
    },
    
    getHero(_, id) {
      return new Promise((resolve, reject) => {
        axios.get('/hero' + '?filterByFormula=id%3D' + id)
        .then(res => resolve(res.data.records.pop()))
        .catch(error => reject("Erro ao recuperar um herói. \n" + error))
      })
    }
}
