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
      @refresh="() => this.$emit('refresh')"
    />

    <DeleteModal
      ref="deleteModal"
      width="500"
      :hero="hero"
      @refresh="() => this.$emit('refresh')"
    />
  </v-card>
</template>

<script>
import RegisterModal from "@/components/RegisterModal.vue";
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
  },
};
</script>