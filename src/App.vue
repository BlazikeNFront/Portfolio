<template>
  <!--  <custom-cursor></custom-cursor> -->
  <page-loader v-if="pageIsLoading"></page-loader>
  <the-nav-bar></the-nav-bar>
  <main class="main">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </main>
</template>

<script>
import TheNavBar from "./components/TheNavBar/TheNavBar.vue";
import PageLoader from "./components/common/PageLoader.vue";
/* import customCursor from "./components/common/Cursor.vue"; */
export default {
  name: "App",
  components: {
    TheNavBar,
    PageLoader,
    /*  customCursor, */
  },
  data() {
    return {
      currentRoute: null,
      routeIsLoading: null,
      routeLoaded: null,
    };
  },
  computed: {
    pageIsLoading() {
      return this.$store.getters["getIsPageLoading"];
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

#app {
  @include flexRow;
  width: 100vw;
  height: 100vh;
  position: relative;

  background-color: $app-background;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  font-family: $text-font;
}
.main {
  width: 90vw;
  height: 100%;
}
</style>
