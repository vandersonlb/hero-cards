<template>
  <div id="app">
    <h1 class="text-center mt-10 primary--text">Cards dos Heróis</h1>

    <v-container>
      <v-container
        d-flex
        flex-wrap
        class="group px-8 py-7 my-8"
        v-for="group in groupHeroes"
        :key="group.id"
      >
        <h2 class="titulo">{{ group.comic.nome }}</h2>
        <div class="card" v-for="hero in group.heroes" :key="hero.id">
          <my-card
            flex-grow-1
            :hero="hero"
            :comic="group.comic.nome"
            @delEmited="delHero"
          ></my-card>
        </div>
      </v-container>
    </v-container>

    <v-btn color="primary ma-4" fab dark fixed bottom right>
      <router-link
        :to="{ name: 'register' }"
        class="white--text text-decoration-none"
      >
        <v-icon>mdi-plus</v-icon>
      </router-link>
    </v-btn>
  </div>
</template>

<script>
import MyCard from "@/components/Card.vue";
import api from "@/services";

export default {
  name: "Crud",
  data() {
    return {
      groupHeroes: [],
    
    };
  },
  components: {
    "my-card": MyCard,
  },
  async mounted() {
    try {
      let groups = await api.group
        .getAllGroups()
        .then((response) => response);

      groups.forEach((comic) => {
        api.group
          .getHeroesByGroup(Number(comic.id))
          .then((heroes) =>
            heroes.length ? this.groupHeroes.push({ comic, heroes }) : false
          );
      });
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    delHero(heroId) {
      api.hero
        .deleteHero(heroId)
        .then(() => this.delHeroFromView(heroId))
        .catch((err) => console.error(err));
    },

    delHeroFromView(heroId) {
      this.groupHeroes.forEach((group, groupIndex) => {
        group.heroes.forEach((hero, heroIndex) => {
          if (hero.id == heroId) {
            group.heroes.splice(heroIndex, 1);
            if (!group.heroes.length) this.groupHeroes.splice(groupIndex, 1);
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  @media (min-width: 1600px) {
    width: 80%;
  }
}

.group {
  position: relative;
  border: 2px solid;
  border-image: linear-gradient(90deg, darkgray 0%, gray 100%);
  border-image-slice: 1;

  &:nth-child(2n) {
    border-image: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
    border-image-slice: 1;
  }
  &:nth-child(3n) {
    border-image: linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%);
    border-image-slice: 1;
  }

  & .titulo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -18px;
    text-align: center;
    background-color: white;
    padding: 0 15px;
  }
}

.card {
  width: calc(25% - (10px * 2));
  margin: 10px;
}
</style>