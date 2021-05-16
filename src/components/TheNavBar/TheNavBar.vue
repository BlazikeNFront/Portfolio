<template>
  <nav>
    <div class="navBar__homePageLink">
      <span tabindex="1">B</span>
      <p>Damian</p>
    </div>
    <ul>
      <li class="acitvePage">
        <a tabindex="1">
          <font-awesome-icon
            :icon="['fa', 'home']"
            class="navBar__Icon"
          ></font-awesome-icon>
          <p>HOME PAGE</p>
        </a>
      </li>
      <li>
        <a tabindex="1">
          <font-awesome-icon
            :icon="['fa', 'user']"
            class="navBar__Icon"
          ></font-awesome-icon>
          <p>ABOUT ME</p>
        </a>
      </li>
      <li>
        <a tabindex="1">
          <font-awesome-icon
            :icon="['fa', 'briefcase']"
            class="navBar__Icon"
          ></font-awesome-icon>
          <p>PROJECTS</p>
        </a>
      </li>
      <li>
        <a tabindex="1">
          <font-awesome-icon
            :icon="['fa', 'id-card']"
            class="navBar__Icon"
          ></font-awesome-icon>
          <p>CONTACT</p>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>
</script>
<style lang='scss'>
nav {
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
        position: relative;
        @include flexRow;
        z-index: 1000;
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
        .navBar__Icon {
          color: #7cd0aa;
          filter: drop-shadow(0px 0px 3px #7cd0aa);
        }
      }
    }
  }
}

.navBar__homePageLink {
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
.navBar__Icon {
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
</style>