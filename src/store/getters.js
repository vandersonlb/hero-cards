export default {
  getHero(state) {
    return id => state.heroList.find(hero => hero.id == id)
  },

  groupHeroes(state) {
    return state.heroList.reduce((acc, obj) => {
      const property = obj["publisher"];
      acc[property] = acc[property] || [];
      acc[property].push(obj);
      return acc;
    }, {});
  }
}