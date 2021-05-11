<template>
  <section class="aboutMePage">
    <article>
      <h2>About Me</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </article>
    <tech-stack-carousel></tech-stack-carousel>
  </section>
</template>
<script>
import TechStackCarousel from "../components/AboutMePage/TechStackCarousel.vue";
export default {
  components: {
    TechStackCarousel,
  },
};
</script>
<style lang='scss'>
.aboutMePage {
  @include flexRow;
  height: 100vh;
  padding: 2rem;
  color: White;
  width: 100%;
  article {
    @include flexColumn;
    width: 40%;
    height: 100%;

    justify-content: space-evenly;

    h2 {
      font-size: 9rem;
      font-weight: 900;
      text-align: center;
    }
  }
}
</style>