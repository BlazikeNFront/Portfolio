<template>
  <ul class="techStack">
    <li v-for="element in techStack" :key="element">
      <img
        :src="require(`../../assets/logos/${element.src}`)"
        :alt="element.alt"
      />
    </li>
  </ul>
</template>
<script>
export default {
  props: {
    techStack: { required: true, type: Array },
  },
};
</script>
<style lang="scss">
.techStack {
  @include flexRow;
  flex-wrap: wrap;
  li {
    margin: 1rem;
  }
}
/*  :src="require(`@/assets/img/${filename}`) */
</style>
