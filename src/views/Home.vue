<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <h1 class="text-center mt-8 mb-5 primary--text">Cards dos Heróis</h1>

          <template v-if="heroGrouped">
            <v-container
              class="my-5"
              v-for="(group, title) in heroGrouped"
              :key="title"
            >
              <h2 class="primary--text pa-5">{{ title }}</h2>
              <v-row>
                <v-col
                  class="col-12 col-sm-6 col-lg-3 col-xl-2"
                  v-for="hero in group"
                  :key="hero.id"
                >
                  <Card :hero="hero" @refresh="heroGrouped = groupHeroes" />
                </v-col>
              </v-row>
            </v-container>
          </template>

          <v-btn
            color="primary ma-4"
            fab
            dark
            fixed
            bottom
            right
            @click="openCreateModal"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-container>

        <RegisterModal
          ref="createModal"
          width="700"
          @refresh="heroGrouped = groupHeroes"
        />
      </v-main>
    </v-app>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import RegisterModal from "@/components/RegisterModal.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: { Card, RegisterModal },
  data: () => ({
    heroGrouped: undefined,
  }),

  computed: {
    ...mapGetters(["groupHeroes"]),
  },

  methods: {
    ...mapActions(["getHeroList"]),

    openCreateModal() {
      this.$refs.createModal.openModal();
    },
  },

  mounted() {
    this.getHeroList()
      .then(() => (this.heroGrouped = this.groupHeroes))
      .catch((err) => console.error(err));
  },
};
</script>
