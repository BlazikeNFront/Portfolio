<template>
  <section class="detailsProjectView">
    <h2>{{ pickedProject.title }}</h2>
    <button
      class="detailsProjectView__linkToProjects"
      @click="navigateToProjects"
      data-cursor="pointer"
    >
      <back-arrow></back-arrow>
    </button>

    <div class="detailsProjectView__content">
      <div class="detailsProjectView__imagesAndLink">
        <img
          :src="require('../assets/sliderImages/' + pickedProject.images[0])"
          class="detailsProjectView__image"
        />
        <project-links
          class="detailsProjectView__desktopLinks"
          :links="pickedProject.links"
        ></project-links>
      </div>
      <div class="detailsProjectView__description">
        <article>
          <h3>About</h3>
          <p
            :class="[
              lineHeightAdjustment ? 'bigLineHeight' : 'smallLineHeight',
            ]"
          >
            {{ pickedProject.description }}
          </p>
        </article>
        <div class="detailsProjectView__techStack">
          <h4>TECHSTACK:</h4>
          <tech-stack :techStack="pickedProject.techstack"></tech-stack>
        </div>
        <project-links
          class="detailsProjectView__mobileLinks"
          :links="pickedProject.links"
        ></project-links>
      </div>
    </div>
  </section>
</template>
<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import TechStack from "../components/projectDetailsPage/techStack.vue";
import BackArrow from "../assets/logos/backArrow.vue";
import projectLinks from "../components/projectDetailsPage/projectLinks.vue";

export default {
  components: {
    TechStack,
    projectLinks,
    BackArrow,
  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const pickedProject = store.getters.getSingleProject(
      route.params.projectName
    );
    const lineHeightAdjustment = computed(() => {
      if (pickedProject.description.split(" ").length > 70) {
        return true;
      }
      return false;
    });

    function navigateToProjects() {
      const indexOfCurrentProject = store.getters.getSingleProjectIndex(
        route.params.projectName
      );
      console.log(indexOfCurrentProject);
      router.push({
        name: "projectsPage",
        params: { indexOfActive: indexOfCurrentProject },
      });
    }

    return { pickedProject, navigateToProjects, lineHeightAdjustment };
  },
};
</script>
<style lang="scss">
.detailsProjectView {
  @include flexColumn;

  margin-bottom: 5rem;
  width: 100%;
  justify-content: space-around;
  color: White;
  h2 {
    margin: 9rem 0 1rem 0;
  }
}
.detailsProjectView__linkToProjects {
  position: absolute;
  top: 2rem;
  left: 2rem;
  border-radius: 5px;
  background: none;
  border: none;
  font-size: 5rem;
  color: $app-background;
  filter: drop-shadow(0px 0px 3px #7cd0aa);
  transform: rotate(180deg);
  cursor: none;

  &:hover {
    color: $neon-green;
  }
  &:focus {
    @include focusAttribute;
  }
}

.detailsProjectView__content {
  @include flexColumn;
  width: 95%;
  justify-content: space-evenly;
}

.detailsProjectView__image {
  margin: 0.5rem;
  width: 25rem;
  height: 40rem;
  object-fit: contain;
}
.detailsProjectView__desktopLinks {
  display: none;
}
.detailsProjectView__description {
  @include flexColumn;
  width: 95%;
  justify-content: space-evenly;
  article {
    @include flexColumn;
    min-height: 20rem;
    justify-content: space-evenly;
    p {
      margin: 1rem;
      width: 100%;
      font-size: 1.8rem;

      text-align: justify;
    }
  }
}

.detailsProjectView__techStack {
  @include flexColumn;
  margin: 2rem 0;
  flex-wrap: wrap;
  justify-content: space-between;
  h4 {
    margin: 2rem 0;
  }
  span {
    @include flexRow;
    margin-top: 2rem;
    width: 100%;
    height: 10rem;
    font-size: 4rem;
  }
}
.bigLineHeight {
  line-height: 2.2rem;
}
.smallLineHeight {
  line-height: 3rem;
}
@media (min-width: 768px) {
  .detailsProjectView {
    h2 {
      margin: 3rem 0;
    }
  }

  .detailsProjectView__image {
    width: 33rem;
    height: 50rem;
  }
}
@media (min-width: 1440px) {
  .detailsProjectView {
    @include flexColumn;

    width: 100%;
    height: 100%;
    justify-content: space-around;
    color: White;
  }
  .detailsProjectView__linkToProjects {
    top: 9rem;
  }
  .detailsProjectView__content {
    @include flexRow;
    width: 95%;
    justify-content: space-evenly;
  }
  .detailsProjectView__imagesAndLink {
    @include flexColumn;
    width: 45%;
    height: 100%;
    justify-content: space-evenly;
  }
  .detailsProjectView__image {
    margin: 0.5rem;
    width: 40rem;
    height: 55rem;
  }
  .detailsProjectView__description {
    @include flexColumn;
    width: 60%;
    justify-content: space-evenly;
  }

  .detailsProjectView__aboutSection {
    @include flexColumn;
    justify-content: space-between;
    p {
      margin: 1rem;
      width: 100%;
      text-align: justify;
    }
  }
  .detailsProjectView__techStack {
    @include flexColumn;
    margin: 2rem 0;
    flex-wrap: wrap;
    justify-content: space-between;
    h4 {
      margin: 2rem 0;
    }
    span {
      margin: 0;
      font-size: 5rem;
    }
  }
  .detailsProjectView__mobileLinks {
    display: none;
  }
  .detailsProjectView__desktopLinks {
    @include flexRow;

    justify-content: space-evenly;
  }
}
@media (min-width: 1920px) {
  .detailsProjectView__image {
    width: 40rem;
    height: 55rem;
  }
}
</style>
