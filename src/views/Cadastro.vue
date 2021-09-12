<template>
  <div>
    <h1>Cadastrar Herói</h1>
    <form class="form" @submit.prevent="adicionaHeroi">
      <div class="form__item">
        <label for="nome">Nome:</label>
        <input id="nome" type="text" v-model="heroi.nome" />
      </div>
      <div class="form__item">
        <label for="superpoder">Superpoder:</label>
        <input id="superpoder" type="text" v-model="heroi.superpoder" />
      </div>
      <div class="form__item">
        <label for="foto">Foto:</label>
        <input id="foto" type="text" v-model.lazy="heroi.foto" />
        <img v-if="heroi.foto" :src="heroi.foto" alt="" />
      </div>
      <div class="form__item">
        <label for="editora">Editora:</label>
        <select id="editora" v-model="heroi.grupo">
          <option v-for="(editora, index) in editoras" :key="index" :value="index">{{editora}}</option>
        </select>
      </div>
      <my-button funcao="salvar"></my-button>
    </form>
  </div>
</template>

<script>
import MyButton from "@/components/MyButton.vue";
import Heroi from "@/models/Heroi";
import gruposService from "@/services/gruposService";
import heroisService from "@/services/heroisService";

export default {
  components: { MyButton },
  data() {
    return {
      heroi: new Heroi(),
      editoras: [ ],
    };
  },
  mounted() {
    gruposService
      .getAllGroups()
      .then((response) => (this.editoras = response.map((editora) => editora.nome)));
  },
  methods: {
    adicionaHeroi() {
      heroisService
        .addHero(this.heroi)
        .then(res => console.log(res))
        .then(this.heroi = new Heroi())
    },
  },
};
</script>

<style lang="scss">
.form {
  display: flex;
  flex-wrap: wrap;
  width: 40%;
  margin: 0 auto;
  padding: 15px 15px 25px;
  border: 2px solid;
  border-image: linear-gradient(90deg, darkgray 0%, gray 100%);
  border-image-slice: 1;
  &__item {
    width: 100%;
    text-align: left;
    padding: 10px;
    & img {
      padding: 15px 15px 0px;
      width: 100%;
      height: 300px;
      object-fit: cover;
      object-position: 50% 25%;
    }
    & label {
      line-height: 2;
      display: block;
    }
    & input,
    & select {
      width: 95%;
      border: none;
      border: 1.5px solid rgb(153, 153, 153);
      padding: 5px 10px;
      border-radius: 25px;
      outline: none;
      appearance: none;
      &:focus {
        border-color: rgb(44, 44, 44);
      }
    }
    & select {
      width: 98%;

      &::-ms-expand { 
        display: none; /* remove default arrow in IE 10 and 11 */
        background-color: red;
      }
    }
  }
}
</style>