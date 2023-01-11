<template>
  <v-dialog v-model="dialog" max-width="600">
    <v-card>
      <v-card-title class="text-h6 lighten-2">
        Confirmar exclusão
      </v-card-title>

      <v-card-text>
        Tem certeza que deseja excluir {{ hero.name }}?
        <v-progress-linear
          v-if="progress"
          class="mt-4"
          color="deep-purple accent-4"
          indeterminate
          rounded
          height="6"
        ></v-progress-linear>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false"> Fechar </v-btn>
        <v-btn text color="primary" @click="deleteHeroAction(hero.id)">
          Excluir
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "DeleteModal",

  data: () => ({
    dialog: false,
    progress: false,
  }),

  props: {
    hero: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions(["deleteHero"]),

    openModal() {
      this.dialog = true;
    },

    closeModal() {
      this.dialog = false;
    },

    deleteHeroAction(id) {
      this.progress = true;
      this.deleteHero(id)
        .then(() => {
          this.dialog = false;
          this.progress = false;
          this.$emit("refresh");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

