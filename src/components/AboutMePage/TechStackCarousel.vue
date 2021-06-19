<template>
  <div class="carousel__wrapper">
    <p class="carousel__text">
      {{ carouselText }}
    </p>
    <div
      class="carousel__item carousel__item__vue"
      @mouseover="setCarouselTest('VUE 3')"
      @mouseleave="setCarouselTest()"
    >
      <vue-icon></vue-icon>
    </div>
    <div
      class="carousel__item carousel__item__express"
      @mouseover="setCarouselTest('EXPRESS.JS')"
      @mouseleave="setCarouselTest()"
    >
      <express-icon></express-icon>
    </div>
    <div
      class="carousel__item carousel__item__router"
      @mouseover="setCarouselTest('VUE-ROUTER')"
      @mouseleave="setCarouselTest()"
    >
      <vue-router-icon></vue-router-icon>
    </div>
    <div
      class="carousel__item carousel__item__node"
      @mouseover="setCarouselTest('NODE.JS')"
      @mouseleave="setCarouselTest()"
    >
      <node-icon></node-icon>
    </div>
    <div
      class="carousel__item carousel__item__sass"
      @mouseover="setCarouselTest('SASS/SCSS')"
      @mouseleave="setCarouselTest()"
    >
      <sass-icon></sass-icon>
    </div>
    <div
      class="carousel__item carousel__item__mongo"
      @mouseover="setCarouselTest('MongoDB')"
      @mouseleave="setCarouselTest()"
    >
      <mongodb-icon></mongodb-icon>
    </div>
    <div
      class="carousel__item carousel__item__vuex"
      @mouseover="setCarouselTest('VUEX')"
      @mouseleave="setCarouselTest()"
    >
      <vuex-icon></vuex-icon>
    </div>
    <div
      class="carousel__item carousel__item__raspberry"
      @mouseover="setCarouselTest('RASPBERRY PI')"
      @mouseleave="setCarouselTest()"
    >
      <raspberry-icon></raspberry-icon>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
import VueIcon from "../../assets/logos/vueBadge.vue";
import RaspberryIcon from "../../assets/logos/raspberryBadge.vue";
import ExpressIcon from "../../assets/logos/expressBadge.vue";
import MongodbIcon from "../../assets/logos/mongodbBadge.vue";
import VuexIcon from "../../assets/logos/vuexBadge.vue";
import SassIcon from "../../assets/logos/sassBadge.vue";
import NodeIcon from "../../assets/logos/nodeBadge.vue";
import VueRouterIcon from "../../assets/logos/vueRouterBadge.vue";
export default {
  components: {
    VueIcon,
    RaspberryIcon,
    ExpressIcon,
    MongodbIcon,
    VuexIcon,
    SassIcon,
    NodeIcon,
    VueRouterIcon,
  },
  setup() {
    const carouselText = ref("TechStack:");

    function setCarouselTest(text = "TechStack") {
      carouselText.value = text;
    }
    return { carouselText, setCarouselTest };
  },
};
</script>

<style lang="scss">
.carousel__wrapper {
  @include flexRow;
  width: 100%;
  transform: scale(0.7);
  height: 0; // with height set to '0' text center will not cause animation stop
  &:hover {
    .carousel__item {
      animation-play-state: paused;
    }
  }
}
.carousel__text {
  max-width: 22rem;
  font-size: 3rem;
  pointer-events: none;
  text-align: center;
}
.carousel__textLong {
  font-size: 2rem;
}
.carousel__item {
  position: absolute;

  animation: spin 20s linear infinite;
  animation-fill-mode: forwards;
  transform: rotate(0) translate(200px) rotate(0);

  img {
    width: 5rem;
    height: 5rem;
  }
  svg {
    width: 5rem;
    height: 5rem;
  }
  .svg-inline--fa.fa-w-20 {
    width: initial; //reset font awesome icon width
  }
}
.carousel__item__vue {
  svg {
    width: 10rem;
    height: 7rem;
  }
  &:hover {
    filter: drop-shadow(0px 0px 3px $main-color);
  }
}
.carousel__item__mongo {
  animation: spin2 20s linear infinite;
  transform: rotate(0) translate(-200px) rotate(0);
  svg {
    width: 13rem;
    height: 7rem;
  }
  &:hover {
    filter: drop-shadow(0px 0px 3px white);
  }
}
.carousel__item__router {
  animation: spin3 20s linear infinite;
  transform: rotate(0) translateY(200px) rotate(0);
  svg {
    width: 11rem;
    height: 11rem;
  }
  &:hover {
    filter: drop-shadow(0px 0px 3px $main-color);
  }
}
.carousel__item__node {
  animation: spin4 20s linear infinite;
  transform: rotate(0) translateY(-200px) rotate(0);
  svg {
    width: 12rem;
    height: 8rem;
  }
  &:hover {
    filter: drop-shadow(0px 0px 3px $main-color);
  }
}
.carousel__item__sass {
  animation: spin5 20s linear infinite;
  transform: rotate(0) translate(-142px, 142px) rotate(0);
  svg {
    width: 12rem;
    height: 8rem;
    color: #cc6699;
  }
  &:hover {
    filter: drop-shadow(0px 0px 3px #c66394);
  }
}
.carousel__item__express {
  width: 11rem;
  animation: spin6 20s linear infinite;
  transform: rotate(0) translate(142px, -142px) rotate(0);
  svg {
    width: 12rem;
    height: 8rem;
  }
  &:hover {
    filter: drop-shadow(0px 0px 3px white);
  }
}
.carousel__item__vuex {
  animation: spin7 20s linear infinite;
  transform: rotate(0) translate(142px, 142px) rotate(0);
  svg {
    width: 12rem;
    height: 8rem;
  }
  &:hover {
    filter: drop-shadow(0px 0px 3px $main-color);
  }
}
.carousel__item__raspberry {
  animation: spin8 20s linear infinite;
  transform: rotate(0) translate(-142px, -142px) rotate(0);
  svg {
    width: 8rem;
    height: 8rem;
  }
  &:hover {
    filter: drop-shadow(0px 0px 3px #c31c4a);
  }
}
@keyframes spin {
  100% {
    transform: rotate(1turn) translate(200px) rotate(-1turn);
  }
}
@keyframes spin2 {
  100% {
    transform: rotate(1turn) translate(-200px) rotate(-1turn);
  }
}
@keyframes spin3 {
  100% {
    transform: rotate(1turn) translateY(200px) rotate(-1turn);
  }
}
@keyframes spin4 {
  100% {
    transform: rotate(1turn) translateY(-200px) rotate(-1turn);
  }
}
@keyframes spin5 {
  100% {
    transform: rotate(1turn) translate(-142px, 142px) rotate(-1turn);
  }
}
@keyframes spin6 {
  100% {
    transform: rotate(1turn) translate(142px, -142px) rotate(-1turn);
  }
}
@keyframes spin7 {
  100% {
    transform: rotate(1turn) translate(142px, 142px) rotate(-1turn);
  }
}
@keyframes spin8 {
  100% {
    transform: rotate(1turn) translate(-142px, -142px) rotate(-1turn);
  }
}
@media (min-width: 768px) {
  .carousel__wrapper {
    @include flexRow;
    width: 60%;
    transform: scale(1.5);
    height: 0; // with height set to '0' text center will not cause animation stop
    &:hover {
      .carousel__item {
        animation-play-state: paused;
      }
    }
  }
  .carousel__text {
    max-width: 22rem;
    font-size: 3rem;
    pointer-events: none;
    text-align: center;
  }
  .carousel__textLong {
    font-size: 2rem;
  }
  .carousel__item {
    position: absolute;
    width: 5rem;
    height: 5rem;

    animation: spin 20s linear infinite;
    animation-fill-mode: forwards;
    transform: rotate(0) translate(200px) rotate(0);

    img {
      width: 5rem;
      height: 5rem;
    }
    svg {
      width: 5rem;
      height: 5rem;
    }
    .svg-inline--fa.fa-w-20 {
      width: initial; //reset font awesome icon width
    }
  }
  .carousel__item__vue {
    &:hover {
      filter: drop-shadow(0px 0px 3px $main-color);
    }
  }
  .carousel__item__mongo {
    width: 10rem;
    animation: spin2 20s linear infinite;
    transform: rotate(0) translate(-200px) rotate(0);
    svg {
      width: 100%;
    }
    &:hover {
      filter: drop-shadow(0px 0px 3px white);
    }
  }
  .carousel__item__router {
    animation: spin3 20s linear infinite;
    transform: rotate(0) translateY(200px) rotate(0);
    svg {
      width: 7rem;
      height: 7rem;
    }
    &:hover {
      filter: drop-shadow(0px 0px 3px $main-color);
    }
  }
  .carousel__item__node {
    width: 10rem;
    height: 7rem;
    animation: spin4 20s linear infinite;
    transform: rotate(0) translateY(-200px) rotate(0);
    svg {
      width: 100%;
      height: 100%;
    }
    &:hover {
      filter: drop-shadow(0px 0px 3px $main-color);
    }
  }
  .carousel__item__sass {
    width: 7rem;
    height: 7rem;
    animation: spin5 20s linear infinite;
    transform: rotate(0) translate(-142px, 142px) rotate(0);
    svg {
      color: #cc6699;
      width: 100%;
      height: 100%;
    }
    &:hover {
      filter: drop-shadow(0px 0px 3px #c66394);
    }
  }
  .carousel__item__express {
    width: 11rem;
    animation: spin6 20s linear infinite;
    transform: rotate(0) translate(142px, -142px) rotate(0);
    svg {
      width: 100%;
    }
    &:hover {
      filter: drop-shadow(0px 0px 3px white);
    }
  }
  .carousel__item__vuex {
    animation: spin7 20s linear infinite;
    transform: rotate(0) translate(142px, 142px) rotate(0);
    &:hover {
      filter: drop-shadow(0px 0px 3px $main-color);
    }
  }
  .carousel__item__raspberry {
    animation: spin8 20s linear infinite;
    transform: rotate(0) translate(-142px, -142px) rotate(0);
    &:hover {
      filter: drop-shadow(0px 0px 3px #c31c4a);
    }
  }
  @keyframes spin {
    100% {
      transform: rotate(1turn) translate(200px) rotate(-1turn);
    }
  }
  @keyframes spin2 {
    100% {
      transform: rotate(1turn) translate(-200px) rotate(-1turn);
    }
  }
  @keyframes spin3 {
    100% {
      transform: rotate(1turn) translateY(200px) rotate(-1turn);
    }
  }
  @keyframes spin4 {
    100% {
      transform: rotate(1turn) translateY(-200px) rotate(-1turn);
    }
  }
  @keyframes spin5 {
    100% {
      transform: rotate(1turn) translate(-142px, 142px) rotate(-1turn);
    }
  }
  @keyframes spin6 {
    100% {
      transform: rotate(1turn) translate(142px, -142px) rotate(-1turn);
    }
  }
  @keyframes spin7 {
    100% {
      transform: rotate(1turn) translate(142px, 142px) rotate(-1turn);
    }
  }
  @keyframes spin8 {
    100% {
      transform: rotate(1turn) translate(-142px, -142px) rotate(-1turn);
    }
  }
}
</style>
