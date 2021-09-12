<template>
  <v-card elevation="4">
    <v-card-title> {{ hero.nome }} </v-card-title>
    <v-img :src="hero.foto" height="230px"></v-img>
    <v-card-subtitle> {{ comic }} </v-card-subtitle>
    <v-card-text :title="hero.biografia">
      {{ hero.biografia.substring(0, 150) }}...
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" text> Editar </v-btn>
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

<style lang="scss">
/*
.card {
  border-radius: 10px;
  padding: 10px;
  width: 260px;
  box-shadow: 1px 4px 10px rgb(196, 196, 196);
  &__nome {
    word-break: break-all;
  }
  &__imagem {
    width: 100%;
    height: 200px;
    object-fit: cover;
    object-position: 50% 20%;
  }
  &__superpoder {
    font-size: 18px;
    margin: 0;
    margin-top: 20px;
  }
  &__editora {
    margin: 10px 0 15px;
  }
}
*/
</style>