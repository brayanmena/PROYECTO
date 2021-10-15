<template>
  <div class="home">
    <proyecto />
  </div>
</template>

<script>
// @ is an alias to /src
import Proyecto from '../components/Proyecto.vue'

export default {
  name: 'Home',
  components: {
    Proyecto
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>