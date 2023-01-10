import Hero from "@/models/Hero"

export default {
  GET_HERO_LIST(state, payload) {
    state.heroList.length = 0
    payload.forEach(item => {
      let { name, bio, image, publisher, id } = item.fields;
      let imageUrl = image ? image[0].url : null
      state.heroList.push(new Hero(name, imageUrl, bio, publisher, id))
    })
    state.heroList.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0)
  },

  ADD_HERO(state, payload) {
    let { name, bio, image, publisher, id } = payload;
    let imageUrl = image ? image[0].url : null
    state.heroList.push(new Hero(name, imageUrl, bio, publisher, id))
    state.heroList.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0)
  },

  UPDATE_HERO(state, payload) {
    let idx = state.heroList.findIndex(hero => hero.id === payload.id);
    let { name, bio, image, publisher, id } = payload;
    let imageUrl = image ? image[0].url : null
    state.heroList.splice(idx, 1, new Hero(name, imageUrl, bio, publisher, id))
    state.heroList.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 0)
  },

  DELETE_HERO(state, payload) {
    if (payload.deleted) {
      let idx = state.heroList.findIndex(hero => hero.id === payload.id);
      state.heroList.splice(idx, 1);
    }
  },
}
