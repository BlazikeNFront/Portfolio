<template>
  <section class="projectPage">
    <h2>MY PROJECTS</h2>
    <div class="projectPage__sliderWrapper">
      <ul class="projectPage__slider" :style="carouselTranslate">
        <li>
          <slider-card
            :currentActive="activeSlide"
            :slideNumber="1"
            @slideClick="slideAction($event)"
          ></slider-card>
        </li>
        <li>
          <slider-card
            :currentActive="activeSlide"
            :slideNumber="2"
            @slideClick="slideAction($event)"
          ></slider-card>
        </li>
        <li>
          <slider-card
            :currentActive="activeSlide"
            :slideNumber="3"
            @slideClick="slideAction($event)"
          ></slider-card>
        </li>
        <li>
          <slider-card
            :currentActive="activeSlide"
            :slideNumber="4"
            @slideClick="slideAction($event)"
          ></slider-card>
        </li>
        <li>
          <slider-card
            :currentActive="activeSlide"
            :slideNumber="5"
            @slideClick="slideAction($event)"
          ></slider-card>
        </li>
        <li>
          <slider-card
            :currentActive="activeSlide"
            :slideNumber="6"
            @slideClick="slideAction($event)"
          ></slider-card>
        </li>
      </ul>

      <!--  <ul class="projectPage__slider" :style="carouselTranslate">
        <li
          class="projectPage__slideElement"
          v-for="(project, index) in projects"
          :key="index"
        >
          {{ project }}
        </li>
      </ul> -->
      <div class="projectPage__sliderButtons">
        <button
          class="projectPage__sliderButton"
          @click="slideAction(activeSlide - 1)"
        >
          <span class="projectPage__span"> &laquo;</span>
        </button>
        <button
          class="projectPage__sliderButton"
          @click="slideAction(activeSlide + 1)"
        >
          <span class="projectPage__span">&raquo;</span>
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, computed } from "vue";
import sliderCard from "../components/projectsPage/sliderCard.vue";
export default {
  components: {
    sliderCard,
  },
  setup() {
    const projects = [1, 2, 3, 4, 5, 6];
    const slideProportional = 16.66;
    const activeSlide = ref(1);
    const carousel = ref(null);
    const listTranslate = ref(42);
    slideProportional;
    const carouselTranslate = computed(() => {
      return `transform:translateX(${listTranslate.value}%)`;
    });

    function slideAction(e) {
      if (e < 1 || e === activeSlide.value || e > projects.length) {
        return;
      }
      const diffrenceBetweenSlides = activeSlide.value - e;
      if (e > activeSlide.value) {
        activeSlide.value = e;
        listTranslate.value += diffrenceBetweenSlides * slideProportional;
      } else {
        activeSlide.value = e;
        listTranslate.value += diffrenceBetweenSlides * slideProportional;
      }
    }
    return {
      carousel,
      slideAction,
      carouselTranslate,
      activeSlide,
      projects,
    };
  },
};
</script>
<style lang="scss">
.projectPage {
  @include flexColumn;
  width: 100%;
  height: 100vh;

  justify-content: space-evenly;
  color: White;

  h2 {
    font-size: 3rem;
    font-family: $marker-font;
  }
}
.projectPage__sliderWrapper {
  @include flexRow;
  width: 100%;
  height: 64rem;
  position: relative;
  overflow: hidden;
  ul {
    transition: all 1s ease;
  }

  li {
    width: 37rem;
  }
}
.projectPage__slider {
  @include flexRow;

  height: 100%;
  transition: all 0.2s ease;
}
.projectPage__slideElement {
  margin: 2rem;
  width: 35rem;
  height: 80%;
  background-color: darkgoldenrod;
  border: 1px solid black;
}
.projectPage__sliderButtons {
  /* button {
    @include flexRow;
    width: 10rem;
    height: 10rem;
    font-size: 10rem;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;

    position: relative;
    color: white;

    &:hover {
      span {
        color: $main-color;
      }
    }
  } */
}
.projectPage__span {
  @include flexRow;
  position: absolute;
  width: inherit;
  top: -7px;
  left: 3px;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>