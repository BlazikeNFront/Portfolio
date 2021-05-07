<template>
  <div>
    <div class="homePage">
      <h1>
        <span
          class="homePage__letterAnim--1"
          :class="[
            animationEnded
              ? 'letterAnimationAfterAppearance'
              : 'letterAppearanceAnimation',
          ]"
          >H</span
        ><span
          class="homePage__letterAnim--2"
          :class="[
            animationEnded
              ? 'letterAnimationAfterAppearance'
              : 'letterAppearanceAnimation',
          ]"
          >i</span
        ><span
          class="homePage__letterAnim--3"
          :class="[
            animationEnded
              ? 'letterAnimationAfterAppearance'
              : 'letterAppearanceAnimation',
          ]"
          >,</span
        ><br />
        <span
          class="homePage__letterAnim--4"
          :class="[
            animationEnded
              ? 'letterAnimationAfterAppearance'
              : 'letterAppearanceAnimation',
          ]"
          >I</span
        ><span
          class="homePage__letterAnim--5"
          :class="[
            animationEnded
              ? 'letterAnimationAfterAppearance'
              : 'letterAppearanceAnimation',
          ]"
          >'</span
        ><span
          class="homePage__letterAnim--6"
          :class="[
            animationEnded
              ? 'letterAnimationAfterAppearance'
              : 'letterAppearanceAnimation',
          ]"
          >m
        </span>
        &nbsp;<span
          class="homePage__letterAnim--7"
          :class="[
            animationEnded
              ? 'letterAnimationAfterAppearance'
              : 'letterAppearanceAnimation',
          ]"
        >
          D</span
        ><span
          class="homePage__letterAnim--8"
          :class="[
            animationEnded
              ? 'letterAnimationAfterAppearance'
              : 'letterAppearanceAnimation',
          ]"
          >a</span
        ><span
          class="homePage__letterAnim--9"
          :class="[
            animationEnded
              ? 'letterAnimationAfterAppearance'
              : 'letterAppearanceAnimation',
          ]"
          >m</span
        ><span
          class="homePage__letterAnim--10"
          :class="[
            animationEnded
              ? 'letterAnimationAfterAppearance'
              : 'letterAppearanceAnimation',
          ]"
          >i</span
        ><span
          class="homePage__letterAnim--11"
          :class="[
            animationEnded
              ? 'letterAnimationAfterAppearance'
              : 'letterAppearanceAnimation',
          ]"
          >a</span
        ><span
          class="homePage__letterAnim--12"
          :class="[
            animationEnded
              ? 'letterAnimationAfterAppearance'
              : 'letterAppearanceAnimation',
          ]"
          ref="lastAnimatedLetters"
          >n</span
        >
      </h1>
    </div>
  </div>
</template>
<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const animationEnded = ref(false);
    const lastAnimatedLetters = ref(null);
    onMounted(() => {
      lastAnimatedLetters.value.addEventListener("animationend", () => {
        console.log("changed");
        animationEnded.value = true;
      });
    });
    return { animationEnded, lastAnimatedLetters };
  },
};
</script>
<style lang='scss'>
.homePage {
  color: white;
  height: 100vh;
  @include flexRow;
  h1 {
    font-size: 11rem;
    font-weight: 900;

    span {
      display: inline-block;
      text-shadow: 8px 6px 5px black;
    }
  }
}

.letterAnimationAfterAppearance {
  transition: all 0.5s ease-in;
  animation: none;

  &:hover {
    color: $main-color;
    animation-name: letterAnimation;
    animation-delay: 0;
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
}
.letterAppearanceAnimation {
  transform: translateY(-70rem);
  animation-name: letterAppearance;
  animation-duration: 1s;
  animation-iteration-count: 1;

  animation-fill-mode: forwards;
}
.homePage__letterAnim--1 {
  animation-delay: 1s;
}
.homePage__letterAnim--2 {
  animation-delay: 2s;
}
.homePage__letterAnim--3 {
  animation-delay: 3s;
}
.homePage__letterAnim--4 {
  animation-delay: 4s;
}
.homePage__letterAnim--5 {
  animation-delay: 5s;
}
.homePage__letterAnim--6 {
  animation-delay: 6s;
}
.homePage__letterAnim--7 {
  animation-delay: 7s;
}
.homePage__letterAnim--8 {
  animation-delay: 8s;
}
.homePage__letterAnim--9 {
  animation-delay: 9s;
}
.homePage__letterAnim--10 {
  animation-delay: 10s;
}
.homePage__letterAnim--11 {
  animation-delay: 11s;
}
.homePage__letterAnim--12 {
  animation-delay: 12s;
}
@keyframes letterAppearance {
  0% {
    transform: translateY(-70rem);
  }
  85% {
    transform: translateY(0);
  }
  90% {
    transform: translateY(-4rem);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes letterAnimation {
  0% {
    transform: scale(1, 1);
  }
  40% {
    transform: scale(1.2, 0.8);
  }
  60% {
    transform: scale(1, 1.3);
  }
  75% {
    transform: scale(1.15, 0.85);
  }

  100% {
    transform: scale(1, 1);
  }
}
</style>