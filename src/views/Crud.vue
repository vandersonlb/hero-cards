<template>
  <div id="app">
    <h1 class="titulo">Card dos Heróis</h1>

    <h3 mx-auto class="subtitulo">
      <router-link :to="{ name: 'register' }">Adicionar um herói</router-link>
    </h3>

    <v-container d-flex flex-wrap>
      <v-container d-flex flex-wrap class="group" v-for="group in groupHeroes" :key="group.id">
        <h2 class="titulo">{{group.comic.nome}}</h2>
        <div class="card" v-for="hero in group.heroes" :key="hero.id">
          <my-card :hero="hero" :comic="group.comic.nome" @delEmited="delHero"></my-card>
        </div>
      </v-container>
    </v-container>

  </div>
</template>

<script>
import MyCard from "@/components/Card.vue";
import groupService from "@/services/groupService";
import heroService from "@/services/heroService";

export default {
  name: "Crud",
  data() {
    return {
      groupHeroes: [ ],
    };
  },
  components: {
    "my-card": MyCard,
  },
  async mounted() {
    try {
      let groups = await groupService
        .getAllGroups()
        .then((response) => response);
      groups.forEach((comic) => {
        groupService
          .getHeroesByGroup(Number(comic.id))
          .then((heroes) =>
            heroes.length ? this.groupHeroes.push({ comic, heroes }) : false
          );
      });
    } catch (e) {
      console.error(e);
    }
  },
  /*
  mounted() {
    /*
    heroService
      .getAllHeroes()
      .then(res => console.log(res))
      .catch(err => console.error(err))

    heroService
      .getHero(heroId)
      .then(res => console.log(res))
      .catch(err => console.error(err))
    
    heroService
      .addHero(newHero)
      .then(res => console.log(res))
      .catch(err => console.error(err))

    heroService
      .deleteHero(newHeroId)
      .then(res => console.log(res))
      .catch(err => console.error(err))
    
    groupService
      .getAllGroups()
      .then(res => console.log(res))
      .catch(err => console.error(err))

    groupService
      .getHeroesByGroup(2)
      .then(res => console.log(res))
      .catch(err => console.error(err))

    

  },
  */
  methods: {
    delHero(heroId) {
      heroService
        .deleteHero(heroId)
        .then(() => this.delHeroFromView(heroId));
    },
    delHeroFromView(heroId) {
      this.groupHeroes.forEach((group, groupIndex) => {
        group.heroes.forEach((hero, heroIndex) => {
          if (hero.id == heroId) {
            group.heroes.splice(heroIndex, 1);
            if(!group.heroes.length)
              this.groupHeroes.splice(groupIndex,1);
          }
        });
      });
    },
  },
};
</script>

<style lang="scss">
.container {
    @media (min-width: 1600px) {
    width: 80%;
  }
}

.group {
  // border: 2px solid red;
  // width: 50% !important;
  width: calc(50% - 20px);
  margin: 20px 10px;
  position: relative;
  border: 2px solid;
  border-image: linear-gradient(90deg, darkgray 0%, gray 100%);
  border-image-slice: 1;
  //  margin: 15px;
  // padding: 30 0px;
  padding-top: 20px;
  padding-bottom: 20px;

  &:nth-child(2n) {
    border-image: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
    border-image-slice: 1;
  }
  &:nth-child(3n) {
    border-image: linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%);
    border-image-slice: 1;
  }

  & .titulo {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -16px;
    text-align: center;
    background-color: white;
    padding: 0 15px;
  }
}

.card {
  width: calc(50% - 20px);
  margin: 10px;
  // height: 400px;
  background-color: white;
  // border: 1px solid black;
}

/*
.titulo {
  margin: 0;
  margin-top: 30px;
}
.subtitulo {
  margin: 10px 0 20px;
  border-bottom: 1px solid #0dcf4e;
  display: inline-block;
  padding: 0 15px;

  & a {
    text-decoration: none;
    color: #0dcf4e;
  }
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.grupo {
  max-width: 46%;
  margin: 15px 15px 25px;
  border: 2px solid;
  border-image: linear-gradient(90deg, darkgray 0%, gray 100%);
  border-image-slice: 1;
  padding: 5px 25px 25px;
  &:nth-child(2n) {
    border-image: linear-gradient(90deg, #fc466b 0%, #3f5efb 100%);
    border-image-slice: 1;
  }
  &:nth-child(3n) {
    border-image: linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%);
    border-image-slice: 1;
  }
  &__titulo {
    color: rgb(88, 88, 88);
    transform: translateY(-20px);
    margin: 0;
    padding: 0px 15px;
    background-color: white;
    display: inline-block;
  }
  &__lista {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
*/
</style>