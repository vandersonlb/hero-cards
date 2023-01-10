<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <v-row
            align="center"
            justify="space-around"
            class="pa-10 ma-10 pb-0 mb-0"
          >
            <v-btn depressed color="primary" @click="addHeroTeste()">
              ADD HERO
            </v-btn>
          </v-row>
        </v-container>
        <v-container>
          <div v-for="hero in heroList" :key="hero.id">
            - {{ hero.name }}, {{ hero.id }}
            <v-btn color="success" text @click="getHeroTeste(hero.id)">
              GET
            </v-btn>
            <v-btn color="error" text @click="deleteHeroTeste(hero.id)">
              DELETE
            </v-btn>
            <v-btn color="primary" text @click="editHeroTeste(hero.id)">
              EDIT
            </v-btn>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Hero from "@/models/Hero.js";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Componente_TESTE",

  computed: {
    ...mapState(["heroList"]),
    ...mapGetters(["getHero"]),
  },

  methods: {
    ...mapActions(["getHeroList", "addHero", "updateHero", "deleteHero"]),

    addHeroTeste() {
      let hero = new Hero(
        "Homem-Aranha",
        "https://gamehall.com.br/wp-content/uploads/2022/07/spider-man-pc.jpg",
        "Lorem ipsum dolor amnet...",
        "Marvel Comics"
      );
      let data = {
        fields: {
          name: hero.name,
          image: hero.image,
          bio: hero.bio,
          publisher: hero.publisher,
        },
      };

      this.addHero(data).catch((err) => console.log(err));
    },

    getHeroTeste(id) {
      console.log(this.getHero(id));
    },

    deleteHeroTeste(id) {
      this.deleteHero(id)
        .catch((err) => console.log(err));
    },

    editHeroTeste(id) {
      let hero = new Hero(
        "Homem-Aranha",
        "https://gamehall.com.br/wp-content/uploads/2022/07/spider-man-pc.jpg",
        "Lorem ipsum dolor amnet...",
        "Marvel Comics"
      );
      let data = {
        fields: {
          name: hero.name,
          image: hero.image,
          bio: hero.bio,
          publisher: hero.publisher,
        },
      };

      this.updateHero({ id, data }).catch((err) => console.error(err));
    },
  },

  mounted() {
    this.getHeroList().catch((err) => console.error(err));
  },
};
</script>