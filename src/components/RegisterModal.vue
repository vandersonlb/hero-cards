<template>
  <v-dialog v-model="dialog" max-width="900">
    <v-card>
      <v-card-title class="text-h6 lighten-2">
        Editar {{ hero.name }}
      </v-card-title>

      <v-card-text>
        <form>
          <v-text-field
            label="Nome"
            v-model="heroModel.name"
            required
          ></v-text-field>
          <v-text-field
            label="Foto (url)"
            v-model.lazy="heroModel.image[0].url"
            required
          ></v-text-field>
          <v-img
            class="mb-6"
            v-if="heroModel.image[0].url"
            max-height="250"
            :src="heroModel.image[0].url"
          ></v-img>
          <v-textarea
            label="Biografia"
            v-model="heroModel.bio"
            rows="3"
            required
          ></v-textarea>
          <v-select
            label="Editora"
            v-model="heroModel.publisher"
            :items="publishers"
            required
          ></v-select>
        </form>
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
        <v-btn text @click="dialog = false"> Cancelar </v-btn>
        <v-btn text color="primary" @click="updateHeroAction(hero.id)">
          Salvar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import Hero from "@/models/Hero";
import { mapActions } from "vuex";

export default {
  name: "DeleteModal",

  data: () => ({
    dialog: false,
    progress: false,
    publishers: ["DC Comics", "Marvel Comics", "Outro"],
    heroModel: new Hero(),
  }),

  props: {
    hero: {
      type: Object,
    },
  },

  methods: {
    ...mapActions(["updateHero"]),

    openModal() {
      this.dialog = true;
    },

    closeModal() {
      this.dialog = false;
    },

    updateHeroAction(id) {
      this.progress = true;

      let data = {
        fields: {
          name: this.heroModel.name,
          image: this.heroModel.image,
          bio: this.heroModel.bio,
          publisher: this.heroModel.publisher,
        },
      };

      this.updateHero({ id, data })
        .then(() => {
          this.dialog = false;
          this.progress = false;
          this.$emit("refresh");
        })
        .catch((err) => console.error(err));
    },
  },

  mounted() {
    if (this.hero) {
      this.heroModel = new Hero(
        this.hero.name,
        this.hero.image[0].url,
        this.hero.bio,
        this.hero.publisher,
        this.hero.id
      );
    }
  },
};
</script>
