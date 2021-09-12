<template>
  <div>
    <h1 class="titulo">Card dos Heróis</h1>
    <h3 class="subtitulo">
      <router-link :to="{ name: 'cadastro' }">Adicionar um herói</router-link>
    </h3>
    <div class="container">
      <div class="grupo" v-for="grupo in heroisGrupo" :key="grupo.editora._id">
        <h2 class="grupo__titulo">{{ grupo.editora.nome }}</h2>
        <ul class="grupo__lista">
          <card
            v-for="heroi in grupo.herois"
            :key="heroi.id"
            :heroi="heroi"
            @deletarEmitido="deletaHeroi"
          >
          </card>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import heroisService from "@/services/heroisService";
import gruposService from "@/services/gruposService";

export default {
  name: "Crud",
  data() {
    return {
      heroisGrupo: [],
    };
  },
  components: {
    Card,
  },
  async mounted() {
    try {
      let grupos = await gruposService
        .getAllGroups()
        .then((response) => response);
      grupos.forEach((editora) => {
        gruposService
          .getHeroesByGroup(Number(editora._id))
          .then((herois) =>
            herois.length ? this.heroisGrupo.push({ editora, herois }) : false
          );
      });
    } catch (e) {
      console.error(e);
    }
  },
  methods: {
    deletaHeroi(heroiId) {
      heroisService
        .deleteHero(heroiId)
        .then(() => this.deletaHeroidaView(heroiId));
    },
    deletaHeroidaView(heroiId) {
      this.heroisGrupo.forEach((grupo) => {
        grupo.herois.forEach((heroi, index) => {
          if (heroi._id == heroiId) {
            grupo.herois.splice(index, 1);
          }
        });
      });
    },
  },
};
</script>

<style lang="scss">
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
</style>