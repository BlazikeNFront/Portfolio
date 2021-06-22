<template>
  <div class="navDesktop">
    <router-link :to="homePageLink" class="navDesktop__homePageLink">
      <initials-logo tabindex="1"></initials-logo>
      <p>Damian</p>
    </router-link>
    <ul>
      <li>
        <router-link
          :to="homePageLink"
          tabindex="1"
          :class="[activePage === '/' ? 'acitvePage' : '']"
        >
          <font-awesome-icon
            :icon="['fa', 'home']"
            class="navDesktop__Icon"
          ></font-awesome-icon>
          <p>HOME PAGE</p>
        </router-link>
      </li>
      <li>
        <router-link
          :to="aboutPageLink"
          tabindex="1"
          :class="[activePage === '/aboutMe' ? 'acitvePage' : '']"
        >
          <font-awesome-icon
            :icon="['fa', 'user']"
            class="navDesktop__Icon"
          ></font-awesome-icon>
          <p>ABOUT ME</p>
        </router-link>
      </li>
      <li>
        <router-link
          :to="projectsPageLink"
          tabindex="1"
          :class="[activePage === '/projects' ? 'acitvePage' : '']"
        >
          <font-awesome-icon
            :icon="['fa', 'briefcase']"
            class="navDesktop__Icon"
          ></font-awesome-icon>
          <p>PROJECTS</p>
        </router-link>
      </li>
      <li>
        <router-link
          :to="contactPageLink"
          tabindex="1"
          :class="[activePage === '/contact' ? 'acitvePage' : '']"
        >
          <font-awesome-icon
            :icon="['fa', 'id-card']"
            class="navDesktop__Icon"
          ></font-awesome-icon>
          <p>CONTACT</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import InitialsLogo from "../../../assets/logos/initialsLogo.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
import useRouterLinks from "../../hooks/useRouterLinks.js";

export default {
  components: {
    InitialsLogo,
  },
  setup() {
    const route = useRoute();
    const { homePageLink, aboutPageLink, projectsPageLink, contactPageLink } =
      useRouterLinks();
    const activePage = computed(() => {
      return route.path;
    });
    return {
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
.navDesktop {
  display: none;
}
@media (min-width: 768px) {
  .navDesktop {
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    width: 20vw;
    height: 100vh;
    background-color: $nav-bar-background;

    ul {
      @include flexColumn;
      justify-content: flex-start;
      margin: 2rem 0;
      height: 90%;

      li {
        @include flexRow;
        justify-content: space-evenly;
        width: 100%;
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
          font-size: 1.1rem;
        }
        &:hover {
          p {
            color: #7cd0aa;
            text-shadow: 0px 0px 3px #7cd0aa;
          }
          .navDesktop__Icon {
            color: #7cd0aa;
            filter: drop-shadow(0px 0px 3px #7cd0aa);
          }
        }
      }
    }
  }

  .navDesktop__homePageLink {
    @include flexColumn;
    width: 100%;
    height: 20rem;
    text-decoration: none;
    &:focus {
      @include focusAttribute;
    }
    &:hover {
      svg {
        fill: #36ff7c;
        filter: drop-shadow(0px 0px 3px $main-color);
      }
    }

    svg {
      width: 100%;
      animation-name: homePageLink;
      animation-iteration-count: infinite;
      animation-duration: 0.5s;
      fill: #000000;
      filter: drop-shadow(0px 0px 3px $main-color);
    }

    p {
      font-size: 2rem;
      color: White;
      letter-spacing: 1px;
      font-family: $marker-font;
    }
  }
  .acitvePage {
    svg {
      color: $main-color;
      filter: drop-shadow(0px 0px 3px $neon-green);
    }
    p {
      color: $main-color;
      text-shadow: 0px 0px 5px $neon-green;
    }
  }
  .navDesktop__Icon {
    padding: 1rem;
    font-size: 3rem;

    &:focus {
      @include focusAttribute;
    }
  }
  @keyframes homePageLink {
    0% {
      text-shadow: -2px -2px 0 $main-color, 2px 2px 0 #0ff;
    }
    100% {
      text-shadow: -2px -2px 0 #0ff, 2px 2px 0 $main-color;
    }
  }
}
@media (min-width: 1440px) {
  .navDesktop {
    width: 15vw;
  }
}
</style>