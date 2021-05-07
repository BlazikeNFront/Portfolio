<template>
  <nav>
    <div class="navBar__homePageLink">
      <span tabindex="1">B</span>
      <p>Damian</p>
    </div>
    <ul>
      <li>
        <font-awesome-icon
          tabindex="1"
          :icon="['fa', 'home']"
          class="navBar__Icon acitvePage"
        ></font-awesome-icon>
      </li>
      <li>
        <font-awesome-icon
          tabindex="1"
          :icon="['fa', 'user']"
          class="navBar__Icon"
        ></font-awesome-icon>
      </li>
      <li>
        <font-awesome-icon
          tabindex="1"
          :icon="['fa', 'briefcase']"
          class="navBar__Icon"
        ></font-awesome-icon>
      </li>
      <li>
        <font-awesome-icon
          tabindex="1"
          :icon="['fa', 'id-card']"
          class="navBar__Icon"
        ></font-awesome-icon>
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
      padding: 2rem;
    }
  }
}
.navBar__homePageLink {
  width: 100%;
  height: 20rem;
  @include flexColumn;
  cursor: pointer;
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
.navBar__Icon {
  padding: 1rem;
  font-size: 3rem;
  cursor: pointer;
  &:hover {
    color: #68ca9e;
    filter: drop-shadow(0px 0px 3px #68ca9e);
  }
  &:focus {
    @include focusAttribute;
  }
}
.acitvePage {
  color: $main-color;
  filter: drop-shadow(0px 0px 3px $main-color);
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