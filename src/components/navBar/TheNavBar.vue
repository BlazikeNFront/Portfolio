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
@media (min-width: 768px) {
  nav {
    width: 20vw;
  }
}
@media (min-width: 1440px) {
  nav {
    width: 15vw;
  }
}
</style> 