<template>
  <button 
    class="button"
    :class="funcao"
  >
    {{funcao.toUpperCase()}}
  </button>
</template>

<script>
export default {
  name: 'MyButton',
  props: {
    funcao: {
      type: String,
      required: true,
      default: 'editar',
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  font-weight: bold;
  color: white;
  opacity: .8;
  padding: 5px 14px;
  margin: 8px;
  border-radius: 20px;
  background-color: rgb(7, 163, 7);
  border: 1px solid rgb(2, 121, 65);
  &:hover {
    opacity: 1;
    transition: all .3s;
  }
}

.deletar {
  background-color: rgb(241, 47, 47);
  border: 1px solid rgb(255, 0, 0);
}
</style>