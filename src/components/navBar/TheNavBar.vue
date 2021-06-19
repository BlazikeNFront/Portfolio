<template>
  <nav>
    <nav-bar-mobile></nav-bar-mobile>
    <nav-bar-desktop></nav-bar-desktop>
  </nav>
</template>

<script>
import navBarMobile from "./NavBars/navBarMobile.vue";
import navBarDesktop from "./NavBars/navBarDesktop.vue";

export default {
  components: {
    navBarDesktop,
    navBarMobile,
  },
};
</script>

<style>
</style>