<template>
  <div class="navDesktop">
    <router-link
      :to="homePageLink"
      class="navDesktop__homePageLink"
      tabindex="1"
    >
      <initials-logo></initials-logo>
      <span data-cursor="pointer">Damian</span>
    </router-link>
    <ul>
      <li>
        <router-link
          :to="homePageLink"
          data-cursor="pointer"
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
          data-cursor="pointer"
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
          :class="[applyActiveClassOnProjectsSection ? 'acitvePage' : '']"
          data-cursor="pointer"
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
          data-cursor="pointer"
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
    const applyActiveClassOnProjectsSection = computed(() => {
      if (route.path.includes("projects")) {
        return true;
      }
      return false;
    });
    return {
      homePageLink,
      aboutPageLink,
      projectsPageLink,
      contactPageLink,
      activePage,
      applyActiveClassOnProjectsSection,
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
        padding: 2rem 0;
        a {
          @include flexRow;
          width: 20rem;
          justify-content: space-evenly;
          z-index: 1000;
          color: $app-background;
          text-decoration: none;
          cursor: none;
          & > * {
            pointer-events: none;
          }
          &:focus {
            @include focusAttribute;
            box-shadow: 0 0 4px 2px #41b883;
            border-radius: 10px;
          }
        }
        p {
          font-size: 1.3rem;
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
    height: 25rem;
    text-decoration: none;
    border-radius: 10px;
    &:focus {
      @include focusAttribute;
    }

    svg {
      width: 100%;
      animation-name: initailsAnimation;
      animation-iteration-count: infinite;
      animation-duration: 40s;
      fill: #000000;
      filter: drop-shadow(0px 0px 3px $neon-green);
    }

    span {
      font-size: 3rem;
      color: White;
      letter-spacing: 1px;
      font-family: $marker-font;
    }
  }
  .acitvePage {
    svg {
      color: $neon-green;
      filter: drop-shadow(0px 0px 3px $neon-green);
    }
    p {
      color: $neon-green;
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
      text-shadow: -2px -2px 0 $neon-green, 2px 2px 0 #0ff;
    }
    100% {
      text-shadow: -2px -2px 0 #0ff, 2px 2px 0 $neon-green;
    }
  }
}
@media (min-width: 1024px) {
  .navDesktop {
    a {
      cursor: none;
    }
  }
}
@media (min-width: 1440px) {
  .navDesktop {
    width: 15vw;
    ul {
      li {
        height: 10rem;
        padding: 0;
      }
    }
    p {
      font-size: 1.5rem;
    }
  }
}
@media (min-width: 1920px) {
  .navDesktop {
    position: relative;
    width: 12vw;

    p {
      font-size: 1.8rem;
    }
  }
}
@keyframes initailsAnimation {
  0% {
    fill: $neon-green;
    filter: drop-shadow(0px 0px 5px $neon-green);
  }
  50% {
    fill: #000;
    filter: drop-shadow(0px 0px 0px #000);
  }
  100% {
    fill: $neon-green;
    filter: drop-shadow(0px 0px 5px $neon-green);
  }
}
</style>