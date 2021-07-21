<template>
  <div class="card" :style="slideStyle">
    <div class="card__leftBorder"></div>
    <div
      class="cardImage"
      data-cursor="pointer"
      :style="{
        backgroundImage:
          'url(' + require('../../assets/sliderImages/' + imgLink) + ')',
      }"
      @click="$emit('slideClick', slideNumber)"
    >
      <transition name="cardInformation">
        <div
          class="card__informations"
          :data-cursor="isActive ? '' : 'pointer'"
          v-if="isActive"
        >
          <h4>{{ project.title }}</h4>
          <div class="card__buttons">
            <base-button data-cursor="pointer" @click="openNewTabWithProject"
              ><p data-cursor="pointer">LIVE</p></base-button
            >
            <base-button
              @click="routeToDetailsAboutProject"
              data-cursor="pointer"
            >
              <p data-cursor="pointer">MORE INFO</p>
            </base-button>
          </div>
        </div>
      </transition>
    </div>
    <div class="card__rightBorder"></div>
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import BaseButton from "../common/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  props: {
    project: { type: Object, required: true },
    currentActive: { type: Number, required: true },
    slideNumber: { type: Number, required: true },
  },
  setup(props) {
    const router = useRouter();
    const imgLink = ref(props.project.images[0]);
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
    function openNewTabWithProject() {
      window.open(props.project.links[0].live, "_blank");
    }
    /*  const routeToDetailsAboutProject = computed(() => {
      return {
        name: "projectDetailsPage",
        params: { projectName: props.project.name },
      };
    }); */
    function routeToDetailsAboutProject() {
      router.push({
        name: "projectDetailsPage",
        params: { projectName: props.project.name },
      });
    }
    return {
      slideStyle,
      imgLink,
      isActive,
      routeToDetailsAboutProject,
      openNewTabWithProject,
    };
  },
};
</script>
<style lang="scss">
.card {
  position: relative;
  width: 35rem;
  height: 50rem;

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
  /*  background-image: url("../../assets/sliderImages/dataWarehouse.png"); */
  background-size: cover;
  background-position: center;
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
    a {
      color: white;
      text-decoration: none;
      z-index: 1000;
      cursor: none;
    }
  }
}
.card__informations {
  @include flexColumn;
  position: absolute;
  top: -7.5rem;
  width: 100%;
  height: 135%;
  justify-content: space-between;
  h4 {
    @include flexColumn;
    width: 90%;
    height: 6rem;
    border-radius: 20px;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
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
  left: -4.9rem;
  width: 10rem;
  height: 50rem;
  background-color: black;
  transform-style: preserve-3d;
  transition: all 0.2s ease;

  transform: translate3d(0, 0, -5rem) rotateY(90deg);
}
.card__rightBorder {
  position: absolute;
  top: 0px;
  right: -4.9rem;
  width: 10rem;
  height: 50rem;
  background-color: black;
  transform-style: preserve-3d;
  transition: all 0.2s ease;
  transform: translate3d(0, 0, -5rem) rotateY(90deg);
}
.cardInformation-enter-active {
  transition: all 0.5s ease;
  transition-delay: 0.3s;
}
.cardInformation-leave-active {
  transition: all 0.3s ease;
}
.cardInformation-leave-from,
.cardInformation-enter-to {
  opacity: 1;
}
.cardInformation-enter-from,
.cardInformation-leave-to {
  opacity: 0;
}
@media (min-width: 768px) {
  .card {
    position: relative;
    width: 35rem;
    height: 50rem;

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
    /*  background-image: url("../../assets/sliderImages/dataWarehouse.png"); */
    background-size: cover;
    background-position: center;
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
  .card__informations {
    @include flexColumn;
    position: absolute;
    top: -7.5rem;
    width: 100%;
    height: 135%;
    justify-content: space-between;
    h4 {
      @include flexColumn;
      width: 100%;
      height: 6rem;
      border-radius: 20px;
      background-color: rgba(0, 0, 0, 0.9);
      color: white;
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
    left: -4.9rem;
    width: 10rem;
    height: 50rem;
    background-color: black;
    transform-style: preserve-3d;
    transition: all 0.2s ease;

    transform: translate3d(0, 0, -5rem) rotateY(90deg);
  }
  .card__rightBorder {
    position: absolute;
    top: 0px;
    right: -4.9rem;
    width: 10rem;
    height: 50rem;
    background-color: black;
    transform-style: preserve-3d;
    transition: all 0.2s ease;
    transform: translate3d(0, 0, -5rem) rotateY(90deg);
  }
  .cardInformation-enter-active {
    transition: all 0.5s ease;
    transition-delay: 0.3s;
  }
  .cardInformation-leave-active {
    transition: all 0.3s ease;
  }
  .cardInformation-leave-from,
  .cardInformation-enter-to {
    opacity: 1;
  }
  .cardInformation-enter-from,
  .cardInformation-leave-to {
    opacity: 0;
  }
}
@media (min-width: 1024px) {
}
</style>