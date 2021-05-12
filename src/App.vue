<template>
  <!-- <custom-cursor></custom-cursor> -->
  <the-nav-bar></the-nav-bar>
  <main class="main">
    <!-- <home-page></home-page> -->
    <!-- <about-page></about-page> -->
    <projects-page></projects-page>
  </main>
</template>

<script>
import TheNavBar from "./components/TheNavBar/TheNavBar.vue";
/* import HomePage from "./router/homePage.vue"; */
/* import AboutPage from "./router/aboutPage.vue"; */
import ProjectsPage from "./router/projectsPage.vue";
/* import CustomCursor from "./components/common/Cursor.vue"; */
export default {
  name: "App",
  components: {
    TheNavBar,
    /*  AboutPage, */
    /* HomePage, */
    ProjectsPage,
    /* CustomCursor, */
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
  box-sizing: border-box;
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
