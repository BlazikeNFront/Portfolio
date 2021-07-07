<template>
  <custom-cursor v-if="allowCustomCursor"></custom-cursor>
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
import customCursor from "./components/common/Cursor.vue";
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";
export default {
  name: "App",
  components: {
    TheNavBar,
    PageLoader,
    customCursor,
  },
  setup() {
    const store = useStore();
    //since cursor computes position on every move, it is better to delete curosr from DOM in smaller devices
    const allowCustomCursor = ref(true);
    const pageIsLoading = computed(() => {
      return store.getters["getShowProgressBar"];
    });

    function customCursorVisibility() {
      const screenWidth = window.innerWidth;
      //first statement checks if device have touch options - but it is not decisive, by that i mean even without those options below device can have tochscreen
      if (
        "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        navigator.msMaxTouchPoints > 0
      ) {
        return false;
      } else if (screenWidth >= 1024) {
        return true;
      } else {
        return false;
      }
    }
    onMounted(() => {
      allowCustomCursor.value = customCursorVisibility();

      window.onresize = () => {
        allowCustomCursor.value = customCursorVisibility();
      };
    });

    return { allowCustomCursor, pageIsLoading };
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
@media (min-width: 1024px) {
  html {
    cursor: none;
  }
}
@media (min-width: 1440px) {
  #app {
    height: 100vh;
    max-height: 108rem;
  }
  .main {
    margin-bottom: 5rem;
    width: 85vw;
  }
}
@media (min-width: 1920px) {
  .main {
    width: 88vw;
  }
}
</style>
