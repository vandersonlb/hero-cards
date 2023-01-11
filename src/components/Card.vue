<template>
  <v-card elevation="4">
    <v-card-title> {{ hero.name }} </v-card-title>
    <v-img lazy :src="hero.image[0].url" height="180px"></v-img>
    <v-card-subtitle> {{ hero.publisher }} </v-card-subtitle>
    <v-card-text class="mb-4" style="height: 100px">
      {{ hero.bio.substring(0, 150) }}...
    </v-card-text>

    <v-card-actions>
      <v-btn text color="primary" @click="openEditModal"> Editar </v-btn>
      <v-btn text color="error" @click="openDeleteModal"> Deletar </v-btn>
    </v-card-actions>

    <RegisterModal
      ref="editModal"
      width="700"
      :hero="hero"
    >
      <template v-slot:title> Editar </template>
      <template v-slot:content> Corpo </template>
    </RegisterModal>

    <DeleteModal
      ref="deleteModal"
      width="500"
      :hero="hero"
      @refresh="() => this.$emit('refresh')"
    >
      <template v-slot:title> Confirmar exclusão </template>
      <template v-slot:content>
        Tem certeza que deseja excluir {{ hero.name }}?
      </template>
    </DeleteModal>
  </v-card>
</template>

<script>
// import { mapActions } from "vuex";
// import DeleteModal from "@/components/DeleteModal.vue"
import RegisterModal from "@/components/RegisterModal.vue"
import DeleteModal from "@/components/DeleteModal.vue";

export default {
  name: "Card",

  data: () => ({
    dialog: false,
    progress: false,
  }),

  components: { RegisterModal, DeleteModal },

  props: {
    hero: {
      type: Object,
      required: true,
    },
  },

  methods: {
    
    openEditModal() {
      this.$refs.editModal.openModal();
    },

    openDeleteModal() {
      this.$refs.deleteModal.openModal();
    },

    /**
     * 
    emitRefresh() {
      this.$emit("refresh")
    }

      ...mapActions(["deleteHero"]),
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
  **/
  },
};
</script>