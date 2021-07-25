<template>
  <section class="aboutMePage">
    <div class="aboutMePage__textContent">
      <h2>About Me</h2>
      <article>
        <p>
          Hi, my name is Damian. My adventure with programming began when I was
          working in an aquaculture facility. After spending some time there, I
          realized that almost all of the work in that kind of place can be
          automated and it would be great to be able to create that types of
          apps by myself. From all possible languages, I decided to start with
          JavaScript, since it actually have good support on Raspberry Pi. So I
          started learning, gaining most of the knowledge from Google. Some time
          later, it turned out that I really like it. Therefore, I put away my
          original goal to go deeper into Front-End developement and some time
          later also Back-End. Main technologies I use, are shown in carousel.
          In my free time, besides discovering web technologies, I like fishing
          and play around with Raspberry PI. I'm currently looking for a job,
          which will allow my further development in the field of Web
          Technologies.
        </p>
      </article>
      <div class="aboutMePage__codewars">
        <p>
          Some time passed since I last touched codewars kata, but it may have
          value to someone...
        </p>
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
    width: 85%;
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
  @include flexColumn;
  p {
    margin: 2rem;
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: center;
  }
  img {
    width: 30rem;
  }
  a {
    border-radius: 10px;
  }
}
.techStackCarouselWrapper {
  @include flexRow;
  width: 100%;
  height: 40rem;
}
@media (min-width: 350px) {
  .aboutMePage {
    article {
      width: 90%;
    }
  }
  .aboutMePage__codewars {
    img {
      width: 35rem;
    }
  }
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