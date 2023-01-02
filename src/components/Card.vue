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
        <v-btn text color="primary"> Editar </v-btn>
      </router-link>
      <!-- <v-btn color="error" @click="action(hero.id)" text> Excluir </v-btn> -->
      <!-- <div class="text-center"> -->
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn text color="error" v-bind="attrs" v-on="on"> Excluir </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h6 lighten-2">
            Confirmar exclusão.
          </v-card-title>

          <v-card-text>
            Tem certeza mesmo que deseja excluir {{ hero.nome }}?
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text @click="dialog = false">Fechar</v-btn>
            <v-btn text color="primary" @click="deleteHero(hero.id)">Excluir</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- </div> -->
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>


<div id="app">
  <v-app id="inspire">

  </v-app>
</div>

<script>
import api from "@/services";

export default {
  name: "Card",
  data: () => ({
    dialog: false,
  }),
  props: {
    hero: Object,
    comic: String,
  },
  methods: {
    action(heroiId) {
      if (confirm("Deseja mesmo deletar?")) {
        this.$emit("heroDeleted", heroiId);
      }
    },
    deleteHero(heroId) {
      api.hero
        .deleteHero(heroId)
        .then(() => this.$emit("heroDeleted", heroId))
        .catch((err) => console.error(err));
    },
  },
};
</script>