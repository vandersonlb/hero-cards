<template>
  <div id="app">
    <h1 v-if="heroId" class="text-center mt-10 mb-8 primary--text">
      Editar herói
    </h1>
    <h1 v-else class="text-center mt-10 mb-8 primary--text">Cadastrar herói</h1>

    <v-card class="container">
      <form>
        <v-text-field label="Nome" v-model="hero.nome" required></v-text-field>
        <v-text-field
          label="Foto"
          v-model.lazy="hero.foto"
          required
        ></v-text-field>
        <v-img
          class="mb-6"
          v-if="hero.foto"
          max-height="250"
          :src="hero.foto"
        ></v-img>
        <v-textarea
          label="Biografia"
          v-model="hero.biografia"
          rows="3"
          required
        ></v-textarea>
        <v-select
          label="Editora"
          v-model="hero.editora"
          :items="groups"
          item-text="nome"
          item-value="id"
          required
        ></v-select>

        <v-btn
          v-if="heroId"
          color="primary"
          class="mr-4 mt-4"
          @click="updateHero(hero)"
        >
          Salvar
        </v-btn>

        <v-btn v-else color="primary" class="mr-4 mt-4" @click="addHero">
          Cadastrar
        </v-btn>

        <router-link
          :to="{ name: 'home' }"
          class="white--text text-decoration-none"
        >
          <v-btn text color="primary" class="mr-4 mt-4"> Voltar </v-btn>
        </router-link>
      </form>
    </v-card>
  </div>
</template>

<script>
import Hero from "@/models/Hero";
import api from "@/services";

export default {
  name: "Register",
  data() {
    return {
      hero: new Hero(),
      groups: [],
      heroId: this.$route.params.heroId,
    };
  },
  mounted() {
    api.group
      .getAllGroups()
      .then((res) => (this.groups = res))
      .catch((err) => console.error(err));

    if (this.heroId)
      api.hero.getHero(this.heroId).then((res) => (this.hero = res));
  },
  methods: {
    addHero() {
      api.hero
        .addHero(this.hero)
        .then(() => this.$router.push({ name: "home" }))
        .then((this.hero = new Hero()))
        .catch((err) => console.error(err));
    },
    updateHero(hero) {
      api.hero
        .updateHero(hero)
        .then(() => this.$router.push({ name: "home" }))
        .then((this.hero = new Hero()))
        .catch((err) => console.error(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 55% !important;
  padding: 36px;
  margin: 0 auto;
}
</style>