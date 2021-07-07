<template>
  <section class="aboutMePage">
    <div class="aboutMePage__textContent">
      <h2>About Me</h2>
      <article>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </article>
      <div class="aboutMePage__codewars">
        <a href="https://www.codewars.com/users/BlazikenFront" target="_blank"
          ><img
            src="https://www.codewars.com/users/BlazikenFront/badges/large"
            alt="CodeWars Badge"
            data-cursor="pointer"
        /></a>
      </div>
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
  width: 100%;
  color: White;
  h2 {
    margin: 8rem 0 3rem 0;
    font-weight: 900;
    text-align: center;
  }
  article {
    @include flexColumn;
    margin: 0 auto;
    width: 90%;
    justify-content: space-evenly;
    p {
      margin: 2rem 0;
      line-height: 3rem;
      text-align: justify;
    }

    h3 {
      margin: 6rem 0 4rem 0;
    }
  }
}
.aboutMePage__codewars {
  @include flexRow;

  img {
    width: 35rem;
  }
}
.techStackCarouselWrapper {
  @include flexRow;
  width: 100%;
  height: 40rem;
}
@media (min-width: 425px) {
  .aboutMePage__codewars {
    img {
      width: 40rem;
    }
  }
  .techStackCarouselWrapper {
    margin-top: 3rem;
  }
}
@media (min-width: 768px) {
  .techStackCarouselWrapper {
    margin: 5rem 0;
    height: 50rem;
  }
}
@media (min-width: 1024px) {
  .aboutMePage__codewars {
    margin-top: 2rem;
    a {
      cursor: none;
      &:focus {
        @include focusAttribute;
      }
    }
  }
}
@media (min-width: 1440px) {
  .aboutMePage {
    @include flexRow;
    margin: 0 3rem 0 2rem;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  }
  .aboutMePage__textContent {
    width: 40%;

    article {
      @include flexColumn;
      width: 100%;
      justify-content: space-evenly;

      h2 {
        font-weight: 900;
        text-align: center;
      }
      p {
        margin: 2rem 0;

        line-height: 3rem;
        text-align: justify;
      }
      h3 {
        margin: 6rem 0 4rem 0;
      }
    }
  }

  .aboutMePage__codewars {
    @include flexColumn;
    margin-top: 5rem;
    img {
      width: 35rem;
    }
  }
  .techStackCarouselWrapper {
    @include flexRow;
    width: 60%;
    height: 40rem;
  }
}
@media (min-width: 1920px) {
  .aboutMePage__codewars {
    img {
      width: 40rem;
    }
  }
}
</style>