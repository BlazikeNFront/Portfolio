<template>
  <section class="projectPage">
    <h2>My Projects</h2>
    <div class="projectPage__sliderWrapper">
      <ul class="projectPage__slider" :style="carouselTranslate">
        <li v-for="(project, index) in projects" :key="project">
          <project-card
            :project="project"
            :currentActive="activeSlide"
            :slideNumber="index"
            @slideClick="slideAction($event)"
          ></project-card>
        </li>
      </ul>
      <div class="projectPage__sliderButtons">
        <button
          class="projectPage__sliderButton"
          :class="{ projectPage__hideButton: firstSlideActive }"
          @click="slideAction(activeSlide - 1)"
        >
          <span
            v-if="!firstSlideActive"
            class="projectPage__span projectPage__span--leftArrow"
            data-cursor="pointer"
            >&laquo;</span
          >
        </button>
        <button
          class="projectPage__sliderButton"
          :class="{ projectPage__hideButton: lastSlideActive }"
          @click="slideAction(activeSlide + 1)"
        >
          <span
            v-if="!lastSlideActive"
            class="projectPage__span"
            data-cursor="pointer"
            >&raquo;</span
          >
        </button>
      </div>
    </div>
  </section>
</template>
<script>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import projectCard from "../components/projectsPage/projectCard.vue";

export default {
  components: {
    projectCard,
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    const projects = store.getters["getAllProjects"];
    const routeParamsAcitveSlide = parseInt(route.params.indexOfActive);
    const slideProportional = parseInt(100 / projects.length);
    const activeSlide = ref(0);
    const carousel = ref(null);
    const listTranslate = ref(40);

    const carouselTranslate = computed(() => {
      return `transform:translateX(${listTranslate.value}%)`;
    });
    const firstSlideActive = computed(() => {
      if (activeSlide.value === 0) {
        return true;
      }
      return false;
    });
    const lastSlideActive = computed(() => {
      if (activeSlide.value === projects.length - 1) {
        return true;
      }
      return false;
    });
    function slideAction(e) {
      if (e < 0 || e === activeSlide.value || e > projects.length - 1) {
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
    onMounted(() => {
      if (routeParamsAcitveSlide) {
        slideAction(routeParamsAcitveSlide);
      }
    });
    return {
      carousel,
      slideAction,
      firstSlideActive,
      carouselTranslate,
      lastSlideActive,
      activeSlide,
      projects,
    };
  },
};
</script>
<style lang="scss">
.projectPage {
  @include flexColumn;
  margin-top: 1rem;
  width: 100%;
  justify-content: space-evenly;
  color: White;
  h2 {
    margin-top: 4rem;
  }
}
.projectPage__sliderWrapper {
  @include flexRow;
  width: 100%;
  height: 70rem;
  position: relative;
  overflow: hidden;
  ul {
    transition: all 1s ease;
  }

  li {
    width: 35rem;
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
  @include flexRow;
  position: absolute;
  width: 95%;
  height: 0;
  justify-content: space-between;
  button {
    @include flexRow;
    position: relative;
    width: 5rem;
    height: 5rem;
    font-size: 5rem;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    color: white;
    cursor: none;

    &:hover {
      span {
        color: $neon-green;
      }
    }
    &:focus {
      @include focusAttribute;
    }
  }
}
.projectPage__hideButton {
  span {
    display: none;
  }
}

.projectPage__span {
  @include flexRow;
  position: absolute;
  top: -4px;
  left: 2px;
  width: inherit;
  height: inherit;
}
.projectPage__span--leftArrow {
  left: 0px;
}
@media (min-width: 425px) {
  .projectPage {
    h2 {
      margin-top: 7rem;
    }
  }
}
@media (min-width: 768px) {
  .projectPage {
    margin: 4rem 0 5rem 0;
  }
}
@media (min-width: 768px) {
  .projectPage {
    margin: 2rem 0 2rem 0;
    h2 {
      margin: 3rem 0;
    }
  }
}
@media (min-width: 1440px) {
  .projectPage {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .projectPage__sliderButtons {
    button {
      width: 10rem;
      height: 10rem;
      span {
        top: -8px;
        font-size: 10rem;
      }
    }
  }
}
.projectPage__span--leftArrow {
  left: -3px;
}
</style>