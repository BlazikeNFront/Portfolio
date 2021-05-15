<template>
  <section class="detailsProjectView">
    <h2>{{ projectDetails.name }}</h2>

    <div class="detailsProjectView__content">
      <div class="detailsProjectView__images">
        <img
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
          class="detailsProjectView__image"
        />
        <img
          src="https://images.unsplash.com/photo-1612151855475-877969f4a6cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGQlMjBpbWFnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
          class="detailsProjectView__image"
        />
        <img
          src="https://wallpapercave.com/wp/wp2670849.jpg"
          class="detailsProjectView__image"
        />
      </div>
      <div class="detailsProjectView__description">
        <h3>PROJECT RAS</h3>
        <p>
          Where does it come from? Contrary to popular belief, Lorem Ipsum is
          not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham.
        </p>
        <div class="detailsProjectView__techStack">
          <span>TECHSTACK:</span>
          <tech-stack
            :techStack="[
              { src: 'vueLogo.svg', alt: 'Vue.js' },
              { src: 'vuexBadge.svg', alt: 'Vuex' },
              { src: 'nodeLogo.svg', alt: 'Node.js' },
            ]"
          ></tech-stack>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { computed } from "vue";
import TechStack from "../components/projectDetailsPage/techStack.vue";

export default {
  components: {
    TechStack,
  },
  props: {
    pickedProject: {
      required: true,
      type: Object,
    },
  },
  setup(props) {
    const projectDetails = computed(() => {
      return props.pickedProject;
    });
    return { projectDetails };
  },
};
</script>
<style lang="scss">
.detailsProjectView {
  @include flexColumn;
  height: 100vh;
  padding: 2rem;
  color: White;
  width: 90vw;
}
.detailsProjectView__content {
  @include flexRow;
}
.detailsProjectView__images {
  position: relative;
  width: 40%;
}
.detailsProjectView__image {
  margin: 0.5rem;
  width: 40rem;
  height: 25rem;
  object-fit: cover;
}
.detailsProjectView__description {
  width: 60%;
  height: 100%;
  h3 {
    font-size: 3rem;
    text-align: center;
  }
  p {
    margin: 1rem;
    width: 100%;
    font-size: 1.5rem;
    text-align: justify;
  }
}
</style>
