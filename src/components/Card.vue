<template>
  <li class="card">
    <h2 class="card__nome">{{heroi.nome}}</h2>
    <img class="card__imagem" :src="heroi.foto" :alt="heroi.nome"/>
    <p class="card__superpoder">{{heroi.superpoder}}</p>
    <p class="card__editora">{{editoras[heroi.grupo]}}</p>
    <my-button funcao="deletar" @click.native="action(heroi._id)"> </my-button>
  </li>
</template>

<script>
import MyButton from '@/components/MyButton.vue';
import gruposService from '@/services/gruposService';

export default {
  name: "Card",
  props: {
    heroi: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      editoras: [ ]
    }
  },
  components: { 
    MyButton
  },
  methods: {
    action(heroiId) {
      if(confirm('Deseja mesmo deletar?')) {
        this.$emit('deletarEmitido', heroiId)
      }
    }
  },
  mounted() {
    gruposService
      .getAllGroups()
      .then(response => this.editoras = response.map((editora) => editora.nome))
  }
};
</script>

<style lang="scss">
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
</style>