export default {
  getHero(state) {
    return id => state.heroList.find(hero => hero.id == id)
  }
}