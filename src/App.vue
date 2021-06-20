<template>
  <!-- <custom-cursor></custom-cursor> -->
  <page-loader v-if="pageIsLoading"></page-loader>
  <the-nav-bar></the-nav-bar>
  <main class="main">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
</template>

<script>
import TheNavBar from "./components/navBar/TheNavBar.vue";
import PageLoader from "./components/common/PageLoader.vue";
/* import customCursor from "./components/common/Cursor.vue"; */
export default {
  name: "App",
  components: {
    TheNavBar,
    PageLoader,
    /*   customCursor, */
  },

  computed: {
    pageIsLoading() {
      return this.$store.getters["getShowProgressBar"];
    },
  },
};
</script>

<style lang='scss'>
@import "@/assets/_reset.scss";
@include resetCSS;
html {
  font-size: 62.5%;
  margin: 0;
  padding: 0;
  text-decoration: none;
}
body {
  background-color: #171717;
}
#app {
  @include flexRow;
  margin: 0 auto;
  width: 100vw;
  max-width: 192rem;
  height: 100%;
  position: relative;
  background-color: $app-background;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: $text-font;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
.main {
  width: 100vw;
  height: 100%;
}
@media (min-width: 768px) {
  .main {
    position: relative;
    right: 0;
    width: 80vw;
  }
}
@media (min-width: 1440px) {
  #app {
    height: 100vh;
  }
  .main {
    width: 85vw;
  }
}
</style>
