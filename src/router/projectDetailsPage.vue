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
  cursor: none;

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
.detailsProjectView__desktopLinks {
  display: none;
}
.detailsProjectView__description {
  @include flexColumn;
  width: 95%;
  justify-content: space-evenly;
  article {
    @include flexColumn;
    justify-content: space-between;
    p {
      margin: 1rem;
      font-size: 1.8rem;
      width: 100%;
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
    font-size: 4rem;
  }
}

@media (min-width: 1440px) {
  .detailsProjectView {
    @include flexColumn;
    margin: 3rem 0;
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
    width: 43rem;
    height: 61rem;
  }
}
</style>
