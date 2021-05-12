<template>
  <section class="projectPage">
    <h2>MY PROJECTS</h2>
    <div class="projectPage__sliderWrapper">
      <ul class="projectPage__slider" :style="carouselTranslate">
        <li>
          <slider-card></slider-card>
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
        <button class="projectPage__sliderButton" @click="slideAction(-16.66)">
          &laquo;
        </button>
        <button class="projectPage__sliderButton" @click="slideAction(16.66)">
          &raquo;
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

    const activeSlide = ref(0);
    const carousel = ref(null);
    const initTranslate = ref(42);
    const carouselTranslate = computed(() => {
      return `transform:translateX(${initTranslate.value}%)`;
    });
    function slideAction(value) {
      initTranslate.value += value;
    }
    return { carousel, slideAction, carouselTranslate, activeSlide, projects };
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
  height: 60rem;
  position: relative;
  background-color: darkcyan;
  overflow: hidden;
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
  @include flexRow;
  position: absolute;
  width: 90%;
  height: 0;
  justify-content: space-between;
}
</style>