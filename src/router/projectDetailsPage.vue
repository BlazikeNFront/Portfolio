<template>
  <section class="detailsProjectView">
    <h2>{{ pickedProject.title }}</h2>
    <button
      class="detailsProjectView__linkToProjects"
      @click="navigateToProjects"
    >
      <font-awesome-icon :icon="['fa', 'arrow-right']"></font-awesome-icon>
    </button>

    <div class="detailsProjectView__content">
      <div class="detailsProjectView__images">
        <img
          :src="require('../assets/sliderImages/' + pickedProject.images[0])"
          class="detailsProjectView__image"
        />
      </div>
      <div class="detailsProjectView__description">
        <section class="detailsProjectView__aboutSection">
          <h3>About</h3>
          <p>
            Where does it come from? Contrary to popular belief, Lorem Ipsum is
            not simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage, and going through the cites of the word in
            classical literature, discovered the undoubtable source. Lorem Ipsum
            comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
            Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
            BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
            dolor sit amet..", comes from a line in section 1.10.32. The
            standard chunk of Lorem Ipsum used since the 1500s is reproduced
            below for those interested. Sections 1.10.32 and 1.10.33 from "de
            Finibus Bonorum et Malorum" by Cicero are also reproduced in their
            exact original form, accompanied by English versions from the 1914
            translation by H. Rackham.
          </p>
        </section>
        <div class="detailsProjectView__techStack">
          <h4>TECHSTACK:</h4>
          <tech-stack :techStack="pickedProject.techstack"></tech-stack>
        </div>
        <project-links :links="pickedProject.links"></project-links>
      </div>
    </div>
  </section>
</template>
<script>
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
import TechStack from "../components/projectDetailsPage/techStack.vue";

import projectLinks from "../components/projectDetailsPage/projectLinks.vue";

export default {
  components: {
    TechStack,
    projectLinks,
  },

  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();
    console.log(route);
    const pickedProject = store.getters.getSingleProject(
      route.params.projectName
    );

    function navigateToProjects() {
      router.push({ name: "projectsPage" });
    }

    return { pickedProject, navigateToProjects };
  },
};
</script>
<style lang="scss">
.detailsProjectView {
  @include flexColumn;
  margin: 10rem 0 5rem 0;
  width: 100%;
  justify-content: space-around;
  color: White;
  h2 {
    font-size: 7rem;
  }
}
.detailsProjectView__linkToProjects {
  position: absolute;
  top: 2rem;
  left: 2rem;
  background: none;
  border: none;
  font-size: 5rem;
  color: $app-background;
  filter: drop-shadow(0px 0px 3px #7cd0aa);
  transform: rotate(180deg);

  &:hover {
    color: $main-color;
  }
}

.detailsProjectView__content {
  @include flexColumn;
  width: 95%;

  justify-content: space-evenly;
}

.detailsProjectView__image {
  margin: 0.5rem;
  width: 35rem;
  height: 56rem;
  object-fit: contain;
}
.detailsProjectView__description {
  @include flexColumn;
  width: 95%;
  justify-content: space-evenly;
}

.detailsProjectView__aboutSection {
  @include flexColumn;
  justify-content: space-between;
  p {
    margin: 1rem;
    width: 100%;
    font-size: 1.5rem;
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
}
@media (min-width: 1440px) {
  .detailsProjectView {
    @include flexColumn;
    margin: 2rem 1rem;
    width: 100%;
    height: 100%;
    justify-content: space-around;
    color: White;
    h2 {
      font-size: 7rem;
    }
  }
  .detailsProjectView__linkToProjects {
    position: absolute;
    top: 2rem;
    left: 2rem;
    background: none;
    border: none;
    font-size: 5rem;
    color: $app-background;
    filter: drop-shadow(0px 0px 3px #7cd0aa);
    transform: rotate(180deg);

    &:hover {
      color: $main-color;
    }
  }

  .detailsProjectView__content {
    @include flexRow;
    width: 95%;
    justify-content: space-evenly;
  }

  .detailsProjectView__image {
    margin: 0.5rem;
    width: 35rem;
    height: 56rem;
    object-fit: contain;
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
      font-size: 1.5rem;
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
  }
}
</style>
