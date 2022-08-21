<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './components/main.vue';

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style>
.modal-open {
  padding-right: 0 !important;
}
</style>
