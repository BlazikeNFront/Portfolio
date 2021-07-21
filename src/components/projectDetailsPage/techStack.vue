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
    <span>{{ techName }}</span>
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
    transform: scale(0.9);
  }
  li {
    margin: 1rem;
  }
  span {
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
      transform: none;
    }
    li {
      margin: 1rem;
    }
  }
}
@media (min-width: 1024px) {
  .techStack {
    span {
      @include flexRow;
      font-size: 5rem;
    }
  }
}
</style>
