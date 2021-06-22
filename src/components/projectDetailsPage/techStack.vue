<template>
  <div class="techStack">
    <ul>
      <li v-for="element in techStack" :key="element">
        <img
          :src="require(`../../assets/logos/svg/${element.src}`)"
          :alt="element.alt"
          :title="element.alt"
          :style="[
            element.alt === techName
              ? `filter: drop-shadow(0px 0px 5px ${element.dropShadow})`
              : '',
          ]"
          @mouseover="setTechName(element.alt)"
        />
      </li>
    </ul>
    <p>{{ techName }}</p>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    techStack: { required: true, type: Array },
  },
  setup(props) {
    const techName = ref(props.techStack[0].alt);
    function setTechName(tech) {
      techName.value = tech;
    }

    return { techName, setTechName };
  },
};
</script>
<style lang="scss">
.techStack {
  ul {
    @include flexRow;
    width: 35rem;
    flex-wrap: wrap;
  }
  li {
    margin: 1rem;
  }
  p {
    margin-top: 2rem;
    width: 100%;
    font-size: 3rem;

    font-family: $marker-font;
    text-align: center;
  }
}
@media (min-width: 768px) {
  .techStack {
    ul {
      @include flexRow;
      width: 60rem;
      flex-wrap: wrap;
    }
    li {
      margin: 1rem;
    }
  }
}
@media (min-width: 1440px) {
  .techStack {
    p {
      font-size: 5rem;
    }
  }
}
</style>
