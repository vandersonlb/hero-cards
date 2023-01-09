<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <v-row align="center" justify="space-around" class="pa-10 ma-10 pb-0 mb-0">
            <v-btn depressed color="primary" @click="addHeroTeste()"> ADD HERO </v-btn>
            <!--
            <v-btn depressed color="primary" @click="func_getOne(2)">
              GET ONE
            </v-btn>
            <v-btn depressed color="primary" @click="func_post"> POST </v-btn>
            <v-btn depressed color="primary" @click="func_put(4)"> PUT </v-btn>
            <v-btn depressed color="primary" @click="func_delete(4)">
              DELETE
            </v-btn>
            <v-btn depressed color="primary" @click="getAllHeroes">
              GET ALL DO STATE
            </v-btn>
          -->
          </v-row>
        </v-container>
        <v-container>
          <div v-for="hero in heroList" :key="hero.id">
            - {{ hero.name }}, {{ hero.id }}
            <v-btn color="success" text @click="getHeroteste(hero.id)"> GET </v-btn>
            <v-btn color="error" text @click="deleteHeroteste(hero.id)"> DELETE </v-btn>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import axios from "@/services";
import Hero from "@/models/Hero.js";
import { mapState, mapActions } from "vuex";

export default {
  name: "Componente_TESTE",

  // data: () => ({
  //   formattedHeroList: []
  // }),

  computed: {
    ...mapState(["heroList"]),
  },

  methods: {
    ...mapActions(["setHeroList", "addHero", "getHero"]),

    addHeroTeste() {
      let hero = new Hero("Homem-Aranha", "foto", "bio", "Marvel Comics");
      let data = {
        "records": [{
          "fields": {
            "name": hero.name,
            "image": hero.image,
            "bio": hero.bio,
            "publisher": hero.publisher
          }
        }]
      }

      this.addHero(data)
        .catch(err => console.log(err))
    },

    getHeroteste(id) {
      // console.log(id);
      this.getHero(id)
        .then(res => console.log(res.fields))
        .catch(err => console.log(err))
    },

    deleteHeroteste(id) {
      this.getHero(id)
        .then(res => axios.delete('/hero/' + res.id))
        .then(() => this.setHeroList())
        // .then(res => console.log(res))
        .catch(err => console.log(err))
      // console.log(id);
      // console.log(this.getHeroteste(id));
      

        // .catch(err => console.log(err))
      // axios.get('/hero' + '?filterByFormula=id%3D' + id)
        // .then(res => console.log(res.data.records.pop()))
    },

  },

  mounted() {
    this.setHeroList()
      // .then(() => this.formattedHeroList = this.heroList)
      .catch(err => console.error(err));
  },

};
</script>  