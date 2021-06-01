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

  /*   props: {
    pickedProject: {
      required: true,
      type: Object,
    },
  }, */
  setup() {
    const store = useStore();
    const route = useRoute();
    const router = useRouter();

    const pickedProject = store.getters.getSingleProject(
      route.params.projectName
    );
    function navigateToProjects() {
      router.push({ name: "myProjects" });
    }

    return { pickedProject, navigateToProjects };
  },
};
</script>
<style lang="scss">
.detailsProjectView {
  @include flexColumn;
  position: relative;
  width: 90vw;
  height: 100vh;
  padding: 2rem;
  justify-content: space-around;
  color: White;
}
.detailsProjectView__linkToProjects {
  position: absolute;
  top: 5rem;
  left: 5rem;
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
  width: 90%;
  height: 80%;
  justify-content: space-evenly;
}

.detailsProjectView__image {
  margin: 0.5rem;
  width: 40rem;
  height: 56rem;
  object-fit: cover;
}
.detailsProjectView__description {
  @include flexColumn;
  width: 60%;
  height: 100%;
  justify-content: space-evenly;
  p {
    margin: 1rem;
    width: 100%;
    font-size: 1.5rem;
    text-align: justify;
  }
}
.detailsProjectView__aboutSection {
  @include flexColumn;
  justify-content: space-between;
  height: 25rem;
}
.detailsProjectView__techStack {
  @include flexColumn;
  justify-content: space-between;
  margin-top: 3rem;
  height: 18rem;
}
</style>
