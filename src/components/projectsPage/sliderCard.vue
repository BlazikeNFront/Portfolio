<template>
  <div class="card" :style="slideStyle">
    <div class="card__leftBorder"></div>
    <div class="cardImage" @click="$emit('slideClick', slideNumber)">
      <transition name="cardButtons">
        <div class="card__buttons" v-if="isActive">
          <base-button><p>LIVE</p></base-button>
          <base-button><p>GITHUB</p></base-button>
        </div>
      </transition>
    </div>
    <div class="card__rightBorder"></div>
  </div>
</template>
<script>
import { computed } from "vue";
import BaseButton from "../common/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  props: {
    currentActive: { type: Number, required: true },
    slideNumber: { type: Number, required: true },
  },
  setup(props) {
    const slideStyle = computed(() => {
      const { currentActive, slideNumber } = props;
      if (currentActive === slideNumber) {
        return "transform: perspective(600px) rotateY(0deg);";
      } else if (currentActive > slideNumber) {
        return "transform: perspective(600px) rotateY(40deg)";
      } else {
        return "transform: perspective(600px) rotateY(-40deg);";
      }
    });
    const isActive = computed(() => {
      const { currentActive, slideNumber } = props;
      if (currentActive === slideNumber) {
        return true;
      } else {
        return false;
      }
    });

    return { slideStyle, isActive };
  },
};
</script>
<style lang="scss">
.card {
  position: relative;
  width: 35rem;
  height: 50rem;
  cursor: pointer;
  transform-style: preserve-3d;
  transition: all 1s ease;
}
.cardImage {
  @include flexRow;
  align-items: flex-end;
  justify-content: space-evenly;
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/sliderImages/tester.jpg");
  background-size: cover;
  button {
    margin-bottom: 2rem;
    width: 15rem;
    height: 5rem;
    color: white;
    font-size: 2rem;
    font-family: $marker-font;
    background-color: black;
    opacity: 1;

    &:hover {
      color: black;
    }
    p {
      z-index: 1000;
    }
  }
}
.card__buttons {
  @include flexRow;
  width: 100%;
  justify-content: space-evenly;
}
.card__leftBorder {
  position: absolute;
  top: 0px;
  left: -49px;
  width: 100px;
  height: 500px;
  background-color: black;
  transform-style: preserve-3d;
  transition: all 0.2s ease;

  transform: translate3d(0, 0, -5rem) rotateY(90deg);
}
.card__rightBorder {
  position: absolute;
  top: 0px;
  right: -49px;
  width: 100px;
  height: 500px;
  background-color: black;
  transform-style: preserve-3d;
  transition: all 0.2s ease;

  transform: translate3d(0, 0, -5rem) rotateY(90deg);
}
.cardButtons-enter-active,
.cardButtons-leave-active {
  transition: all 0.5s ease;
}
.cardButtons-leave-from,
.cardButtons-enter-to {
  opacity: 1;
}
.cardButtons-enter-from,
.cardButtons-leave-to {
  opacity: 0;
}
</style>