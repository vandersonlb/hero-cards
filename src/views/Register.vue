<template>
  <div id="app">
    <v-container>
      <h1>Cadastrar novo card</h1>
      <form>
        <v-text-field
          v-model="name"
          :error-messages="nameErrors"
          :counter="10"
          label="Name"
          required
          @input="$v.name.$touch()"
          @blur="$v.name.$touch()"
        ></v-text-field>
        <v-text-field
          v-model="email"
          :error-messages="emailErrors"
          label="E-mail"
          required
          @input="$v.email.$touch()"
          @blur="$v.email.$touch()"
        ></v-text-field>
        <v-select
          v-model="select"
          :items="items"
          :error-messages="selectErrors"
          label="Item"
          required
          @change="$v.select.$touch()"
          @blur="$v.select.$touch()"
        ></v-select>

        <v-btn class="mr-4" @click="submit"> submit </v-btn>
        <v-btn @click="clear"> clear </v-btn>
      </form>
    </v-container>
  </div>
</template>

<script>
// import MyButton from "@/components/MyButton.vue";
import Heroi from "@/models/Heroi";
import gruposService from "@/services/gruposService";
import heroisService from "@/services/heroisService";

export default {
  // components: { MyButton },
  data() {
    return {
      heroi: new Heroi(),
      editoras: [],
    };
  },
  mounted() {
    gruposService
      .getAllGroups()
      .then(
        (response) => (this.editoras = response.map((editora) => editora.nome))
      );
  },
  methods: {
    adicionaHeroi() {
      heroisService
        .addHero(this.heroi)
        .then((res) => console.log(res))
        .then((this.heroi = new Heroi()));
    },
  },
};
</script>

<style lang="scss">
.container {
  width: 50% !important;
}
/*
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
        display: none;
        background-color: red;
      }
    }
  }
}
*/
</style>