export default {
  getHero(state) {
    return function(heroiId) {
      return state.heroList.find(hero => hero.id === heroiId);
    }
  }
}