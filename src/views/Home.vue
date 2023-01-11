<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <h1 class="text-center mt-8 mb-5 primary--text">Cards dos Heróis</h1>
          <!-- <button @click="teste" @refresh="teste"> CLICK-ME </button> -->

          <template v-if="heroGrouped">
            <v-container class="my-5" v-for="(group, title) in heroGrouped" :key="title">
              <h2 class="primary--text pa-5">{{ title }}</h2>
              <v-row>
                <v-col
                  class="col-12 col-sm-6 col-lg-3 col-xl-2"
                  v-for="(hero, idx) in group"
                  :key="idx"
                >
                  <Card ref="teste"
                  :hero="hero" @refresh="heroGrouped = groupHeroes" />
                </v-col>
              </v-row>
            </v-container>
          </template>

          <v-btn color="primary ma-4" fab dark fixed bottom right>
            <router-link
              :to="{ name: 'register' }"
              class="white--text text-decoration-none"
            >
              <v-icon>mdi-plus</v-icon>
            </router-link>
          </v-btn>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: { Card },
  data: () => ({
    heroGrouped: undefined,
  }),

  computed: {
    ...mapState(["heroList"]),
    ...mapGetters(["groupHeroes"])
  },

  methods: {
    ...mapActions(["getHeroList"]),
  },

  mounted() {
    this.getHeroList()
      .then(() => this.heroGrouped = this.groupHeroes)
      .catch((err) => console.error(err));
  },
};
</script>
