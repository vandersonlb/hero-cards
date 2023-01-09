import Hero from "@/models/Hero"

export default {
  GET_HERO_LIST(state, payload) {
    state.heroList.length = 0
    payload.forEach(item => {
      let {name, bio, image, publisher, id} = item.fields;
      let imageUrl = image ? image[0].url : null
      state.heroList.push(new Hero(name, imageUrl, bio, publisher, id))
    })
  },

  ADD_HERO(state, payload) {
    payload.forEach(item => {
      let {name, bio, image, publisher, id} = item.fields;
      let imageUrl = image ? image[0].url : null
      state.heroList.push(new Hero(name, imageUrl, bio, publisher, id))
    })
  },

}
