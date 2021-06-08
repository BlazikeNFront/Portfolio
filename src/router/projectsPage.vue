<template>
  <section class="projectPage">
    <h2>MY PROJECTS</h2>
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
          @click="slideAction(activeSlide - 1)"
        >
          <span class="projectPage__span projectPage__span--leftArrow"
            >&laquo;</span
          >
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
import projectCard from "../components/projectsPage/projectCard.vue";

export default {
  components: {
    projectCard,
  },
  setup() {
    const projects = [
      {
        name: "dataWarehouse",
        title: "Data Warehouse",
        imageUrl: "dataWarehouse.png",
      },
      {
        name: "weatherApp",
        title: "Weather App",
        imageUrl: "weatherApp.png",
      },
      {
        name: "movieApp",
        title: "Movie App",
        imageUrl: "movieApp.png",
      },
      {
        name: "projectRAS",
        title: "Project RAS",
        imageUrl: "movieApp.png",
      },
      {
        name: "taimenShop",
        title: "Taimen Shop",
        imageUrl: "movieApp.png",
      },
    ];

    const slideProportional = parseInt(100 / projects.length);
    const activeSlide = ref(0);
    const carousel = ref(null);
    const listTranslate = ref(37);

    slideProportional;
    const carouselTranslate = computed(() => {
      return `transform:translateX(${listTranslate.value}%)`;
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
  height: 70rem;
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
  @include flexRow;
  position: absolute;
  width: 100%;
  height: 0;
  justify-content: space-between;
  button {
    @include flexRow;
    position: relative;
    width: 10rem;
    height: 10rem;
    font-size: 10rem;
    background: rgba(0, 0, 0, 0.5);
    border: none;
    border-radius: 50%;
    color: white;

    &:hover {
      span {
        color: $main-color;
      }
    }
  }
}
.projectPage__span {
  @include flexRow;
  position: absolute;
  top: -7px;
  left: 3px;
  width: inherit;
  height: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
}
.projectPage__span--leftArrow {
  left: 0;
}
</style>