<template>
  <div class="nav__mobile">
    <button @click="toggleNavBar">
      <font-awesome-icon
        v-if="!showNavBar"
        :icon="['fa', 'bars']"
        class="navMobile__menuTogglerIcon"
      ></font-awesome-icon>
      <font-awesome-icon
        v-else
        :icon="['fa', 'times']"
        class="navMobile__menuTogglerIcon"
      ></font-awesome-icon>
    </button>
    <transition name="mobileNav">
      <ul v-if="showNavBar">
        <li :class="[activePage === '/' ? 'acitvePageMobile' : '']">
          <router-link :to="homePageLink" tabindex="1" @click="toggleNavBar">
            <font-awesome-icon
              :icon="['fa', 'home']"
              class="navMobile__Icon"
            ></font-awesome-icon>
            <p>HOME PAGE</p>
          </router-link>
        </li>
        <li :class="[activePage === '/aboutMe' ? 'acitvePageMobile' : '']">
          <router-link :to="aboutPageLink" tabindex="1" @click="toggleNavBar">
            <font-awesome-icon
              :icon="['fa', 'user']"
              class="navMobile__Icon"
            ></font-awesome-icon>
            <p>ABOUT ME</p>
          </router-link>
        </li>
        <li :class="[activePage === '/projects' ? 'acitvePageMobile' : '']">
          <router-link
            :to="projectsPageLink"
            tabindex="1"
            @click="toggleNavBar"
          >
            <font-awesome-icon
              :icon="['fa', 'briefcase']"
              class="navMobile__Icon"
            ></font-awesome-icon>
            <p>PROJECTS</p>
          </router-link>
        </li>
        <li :class="[activePage === '/contact' ? 'acitvePageMobile' : '']">
          <router-link :to="contactPageLink" tabindex="1" @click="toggleNavBar">
            <font-awesome-icon
              :icon="['fa', 'id-card']"
              class="navMobile__Icon"
            ></font-awesome-icon>
            <p>CONTACT</p>
          </router-link>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import useRouterLinks from "../../hooks/useRouterLinks.js";
export default {
  setup() {
    const { homePageLink, aboutPageLink, projectsPageLink, contactPageLink } =
      useRouterLinks();
    const route = useRoute();
    const activePage = computed(() => {
      return route.path;
    });
    const showNavBar = ref(false);
    function toggleNavBar() {
      showNavBar.value = !showNavBar.value;
    }
    return {
      showNavBar,
      toggleNavBar,
      homePageLink,
      aboutPageLink,
      projectsPageLink,
      contactPageLink,
      activePage,
    };
  },
};
</script>

<style lang='scss'>
.nav__mobile {
  button {
    position: fixed;
    top: 1rem;
    right: 1rem;
    border: none;
    background: none;
    width: 5rem;
    height: 5rem;
    z-index: 2000;
  }

  ul {
    position: fixed;
    top: 0;
    right: 0;
    padding-top: 6rem;
    border: 2px solid #1bf777;
    border-right: none;
    border-radius: 10px 0 0 10px;
    @include flexColumn;
    justify-content: space-evenly;
    width: 20rem;
    height: 50rem;
    background-color: $nav-bar-background;
    z-index: 1500;
    overflow: hidden;
    li {
      @include flexRow;
      width: 100%;
      height: 100%;
      justify-content: space-evenly;
      font-weight: 600;
      letter-spacing: 2px;
      padding: 2rem;
      a {
        @include flexRow;
        width: 20rem;
        justify-content: space-evenly;
        z-index: 1000;
        color: $app-background;
        text-decoration: none;
        & > * {
          pointer-events: none;
        }
      }
      p {
        font-size: 1.5rem;
        color: #7cd0aa;
        text-shadow: 0px 0px 3px #7cd0aa;
      }
    }
  }
  .navMobile__Icon {
    width: 4rem;
    height: 4rem;
    color: #7cd0aa;
    filter: drop-shadow(0px 0px 3px #7cd0aa);
  }
  .navMobile__menuTogglerIcon {
    width: 100%;
    height: 100%;
    color: white;
  }
  .acitvePageMobile {
    background-color: #141414;
    box-shadow: 0 0 20px #141414;
    .navMobile__Icon {
      width: 5rem;
      height: 5rem;
      color: #1bf777;
      filter: drop-shadow(0px 0px 3px #1bf777);
    }
    p {
      color: #1bf777;
      text-shadow: 0px 0px 3px #1bf777;
    }
  }
}

.mobileNav-enter-active {
  transition: all 0.5s ease-out;
}
.mobileNav-enter-from {
  transform: translate(50rem);
}
.mobileNav-enter-to {
  transform: translate(0rem);
}
.mobileNav-leave-active {
  transition: all 0.5s ease-in;
}
.mobileNav-leave-from {
  transform: translate(0rem);
}
.mobileNav-leave-to {
  transform: translate(50rem);
}

@media (min-width: 768px) {
  .nav__mobile {
    display: none;
  }
}
</style>