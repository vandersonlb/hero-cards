<template>
  <v-card elevation="4">
    <v-card-title> {{ hero.nome }} </v-card-title>
    <v-img :src="hero.foto" height="230px"></v-img>
    <v-card-subtitle> {{ comic }} </v-card-subtitle>
    <v-card-text style="min-height: 130px" :title="hero.biografia">
      {{ hero.biografia.substring(0, 150) }}...
    </v-card-text>
    <v-card-actions>
      <router-link
        :to="{ name: 'register', params: { heroId: hero.id } }"
        class="white--text text-decoration-none"
      >
        <v-btn color="primary" text> Editar </v-btn>
      </router-link>
      <v-btn color="error" @click="action(hero.id)" text> Excluir </v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    hero: Object,
    comic: String,
  },
  methods: {
    action(heroiId) {
      if (confirm("Deseja mesmo deletar?")) {
        this.$emit("delEmited", heroiId);
      }
    },
  },
};
</script>