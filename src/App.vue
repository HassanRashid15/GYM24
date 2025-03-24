<!-- src/App.vue -->
<template>
  <div id="app">
    <AppHeader /> <!-- Header with routing links -->
    <router-view /> <!-- The content of the current route will be rendered here -->
    <AppFooter /> <!-- Footer component -->
  </div>
</template>

<script>
import AppHeader from './components/Layout/AppHeader.vue';
import AppFooter from './components/Layout/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style>
/* Global styles */
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main {
  flex: 1;
  padding: 20px;
}
</style>
