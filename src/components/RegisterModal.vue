<template>
  <v-dialog v-model="dialog" max-width="900">
    <v-card>
      <v-card-title class="text-h6 lighten-2">
        <span v-if="this.hero"> Editar {{ hero.name }} </span>
        <span v-else> Criar novo card de herói </span>
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-text-field
            label="Nome"
            v-model="newHero.name"
          ></v-text-field>
          <v-text-field
            label="Foto (url)"
            v-model.lazy="newHero.image[0].url"
          ></v-text-field>
          <v-img
            class="mb-6"
            max-height="250"
            :src="newHero.image[0].url"
          ></v-img>
          <v-textarea
            label="Biografia"
            v-model="newHero.bio"
            rows="2"
          ></v-textarea>
          <v-select
            label="Editora"
            v-model="newHero.publisher"
            :items="publishers"
          ></v-select>
        </v-form>
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
        <v-btn 
          text
          @click="resetForm"
        >
          Cancelar
        </v-btn>
        <v-btn
          v-if="this.hero"
          text
          color="primary"
          @click="updateHeroAction"
        >
          Salvar
        </v-btn>
        <v-btn
          v-else
          text
          color="primary"
          @click="createHeroAction"
        >
          Criar
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
    newHero: new Hero(),
  }),

  props: {
    hero: {
      type: Object,
    },
  },

  methods: {
    ...mapActions(["updateHero", "addHero"]),

    openModal() {
      this.dialog = true;
    },

    closeModal() {
      this.dialog = false;
    },

    resetForm() {
      this.closeModal()

      if (this.hero) {
        let {name, image, bio, publisher, id} = this.hero 
        this.newHero = new Hero(name, undefined, bio, publisher, id);
        this.newHero.image = [{url: image[0].url}]
      } else {
        this.newHero.image = [{url: undefined}]
      }
    },

    updateHeroAction() {
      this.progress = true;

      let {name, image, bio, publisher, id} = this.newHero
      image = [{url: image[0].url}]
      let data = {fields: {name, image, bio, publisher}}

      this.updateHero({id, data})
        .then(() => {
          this.dialog = false;
          this.progress = false;
          this.$emit("refresh");
        })
        .catch((err) => console.error(err));
    },

    createHeroAction() {
      this.progress = true;

      let {name, image, bio, publisher} = this.newHero
      let data = {fields: {name, image, bio, publisher}}

      this.addHero(data)
        .then(() => {
          this.dialog = false;
          this.progress = false;
          this.$emit("refresh");
        })
        .catch((err) => console.error(err));
    },
  },

  beforeMount() {
    this.resetForm()
  },
};
</script>
