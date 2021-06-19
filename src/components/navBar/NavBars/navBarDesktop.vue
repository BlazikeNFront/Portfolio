<template>
  <div class="navDesktop">
    <div class="navDesktop__homePageLink">
      <span tabindex="1">B</span>
      <p>Damian</p>
    </div>
    <ul>
      <li class="acitvePage">
        <router-link :to="homePageLink" tabindex="1">
          <font-awesome-icon
            :icon="['fa', 'home']"
            class="navDesktop__Icon"
          ></font-awesome-icon>
          <p>HOME PAGE</p>
        </router-link>
      </li>
      <li>
        <router-link :to="aboutPageLink" tabindex="1">
          <font-awesome-icon
            :icon="['fa', 'user']"
            class="navDesktop__Icon"
          ></font-awesome-icon>
          <p>ABOUT ME</p>
        </router-link>
      </li>
      <li>
        <router-link :to="projectsPageLink" tabindex="1">
          <font-awesome-icon
            :icon="['fa', 'briefcase']"
            class="navDesktop__Icon"
          ></font-awesome-icon>
          <p>PROJECTS</p>
        </router-link>
      </li>
      <li>
        <router-link :to="contactPageLink" tabindex="1">
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
import useRouterLinks from "../../hooks/useRouterLinks.js";
export default {
  setup() {
    const { homePageLink, aboutPageLink, projectsPageLink, contactPageLink } =
      useRouterLinks();
    return { homePageLink, aboutPageLink, projectsPageLink, contactPageLink };
  },
};
</script>
<style lang='scss'>
.navDesktop {
  display: none;
}
@media (min-width: 768px) {
  .navDesktop {
    position: relative;
    left: 0;
    height: 100%;
    width: 10vw;
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
    width: 100%;
    height: 20rem;
    @include flexColumn;

    span {
      font-size: 10rem;
      color: white;
      font-weight: 600;
      font-family: sans-serif;
      text-shadow: -2px -2px 0 $main-color, 2px 2px 0 #0ff;
      animation-name: homePageLink;
      animation-iteration-count: infinite;
      animation-duration: 0.5s;

      &:focus {
        @include focusAttribute;
      }
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
      filter: drop-shadow(0px 0px 3px $main-color);
    }
    p {
      color: $main-color;
      text-shadow: 0px 0px 5px $main-color;
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
</style>