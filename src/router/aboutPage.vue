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
    <div class="aboutMePage__codewars">
      <h3>Codewars</h3>
      <a href="https://www.codewars.com/users/BlazikenFront"
        ><img
          src="https://www.codewars.com/users/BlazikenFront/badges/large"
          alt="CodeWars Badge"
      /></a>
    </div>
    <div class="techStackCarouselWrapper">
      <tech-stack-carousel></tech-stack-carousel>
    </div>
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
  @include flexColumn;
  margin: 5rem 0;
  width: 100%;
  color: White;
  article {
    @include flexColumn;

    width: 90%;
    justify-content: space-evenly;

    h2 {
      font-size: 7rem;
      font-weight: 900;
      text-align: center;
    }
    p {
      margin: 2rem 0;
      font-size: 1.5rem;
      line-height: 3rem;
    }
    h3 {
      margin: 6rem 0 4rem 0;
      font-size: 5rem;
    }
  }
}
.aboutMePage__codewars {
  @include flexColumn;
  margin: 4rem 0;
  height: 15rem;
  justify-content: space-between;
  img {
    width: 35rem;
  }
}
.techStackCarouselWrapper {
  @include flexRow;
  width: 40rem;
  height: 40rem;
}
@media (min-width: 1440px) {
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
      p {
        width: 80%;
        font-size: 1.5rem;
        line-height: 3rem;
      }
    }
  }
}
</style>