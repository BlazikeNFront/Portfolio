<template>
  <span
    class="homePage__letterAnim--1"
    :class="[
      animationEnded ? 'animationClassReset' : 'letterAppearanceAnimation',
    ]"
    @mouseover="changeClass($event)"
    >H</span
  >
  <span
    class="homePage__letterAnim--2"
    :class="[
      animationEnded ? 'animationClassReset' : 'letterAppearanceAnimation',
    ]"
    @mouseover="changeClass($event)"
    >i</span
  ><span
    class="homePage__letterAnim--3"
    :class="[
      animationEnded ? 'animationClassReset' : 'letterAppearanceAnimation',
    ]"
    @mouseover="changeClass($event)"
    >,</span
  ><br class="desktopLiner" />

  <span
    class="homePage__letterAnim--4"
    :class="[
      animationEnded ? 'animationClassReset' : 'letterAppearanceAnimation',
    ]"
    @mouseover="changeClass($event)"
  >
    &nbsp;I</span
  ><span
    class="homePage__letterAnim--5"
    :class="[
      animationEnded ? 'animationClassReset' : 'letterAppearanceAnimation',
    ]"
    @mouseover="changeClass($event)"
    >'</span
  ><span
    class="homePage__letterAnim--6"
    :class="[
      animationEnded ? 'animationClassReset' : 'letterAppearanceAnimation',
    ]"
    @mouseover="changeClass($event)"
    >m
  </span>

  <br class="mobileBreakLine" /><span
    class="homePage__letterAnim--7"
    :class="[
      animationEnded ? 'animationClassReset' : 'letterAppearanceAnimation',
    ]"
    @mouseover="changeClass($event)"
  >
    &nbsp;D</span
  ><span
    class="homePage__letterAnim--8"
    :class="[
      animationEnded ? 'animationClassReset' : 'letterAppearanceAnimation',
    ]"
    @mouseover="changeClass($event)"
    >a</span
  ><span
    class="homePage__letterAnim--9"
    :class="[
      animationEnded ? 'animationClassReset' : 'letterAppearanceAnimation',
    ]"
    @mouseover="changeClass($event)"
    >m</span
  ><span
    class="homePage__letterAnim--10"
    :class="[
      animationEnded ? 'animationClassReset' : 'letterAppearanceAnimation',
    ]"
    @mouseover="changeClass($event)"
    >i</span
  ><span
    class="homePage__letterAnim--11"
    :class="[
      animationEnded ? 'animationClassReset' : 'letterAppearanceAnimation',
    ]"
    @mouseover="changeClass($event)"
    >a</span
  ><span
    :class="[
      animationEnded ? 'animationClassReset' : 'letterAppearanceAnimation',
      'homePage__letterAnim--12',
    ]"
    @mouseover="changeClass($event)"
    ref="lastAnimatedLetters"
    >n</span
  >
</template>
<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const headerText = "Hi, I'm Damian";
    const animationEnded = ref(false);
    const lastAnimatedLetters = ref(null);

    function changeClass(e) {
      e.srcElement.addEventListener(
        "animationend",
        () => {
          e.srcElement.classList.remove("mouseOverAnim");
        },
        { once: true }
      );
      e.srcElement.classList.add("mouseOverAnim");
    }

    onMounted(() => {
      lastAnimatedLetters.value.addEventListener(
        "animationend",
        () => {
          animationEnded.value = true;
        },
        { once: true }
      );
    });
    return { animationEnded, lastAnimatedLetters, changeClass, headerText };
  },
};
</script>
<style lang='scss'>
.desktopLiner {
  display: none;
}
.homePage__letterAnim--1 {
  animation-delay: 0.1s;
}
.homePage__letterAnim--2 {
  animation-delay: 0.2s;
}
.homePage__letterAnim--3 {
  animation-delay: 0.3s;
}
.homePage__letterAnim--4 {
  animation-delay: 0.4s;
}
.homePage__letterAnim--5 {
  animation-delay: 0.5s;
}
.homePage__letterAnim--6 {
  animation-delay: 0.6s;
}
.homePage__letterAnim--7 {
  animation-delay: 0.7s;
}
.homePage__letterAnim--8 {
  animation-delay: 0.8s;
}
.homePage__letterAnim--9 {
  animation-delay: 0.9s;
}
.homePage__letterAnim--10 {
  animation-delay: 1s;
}
.homePage__letterAnim--11 {
  animation-delay: 1.1s;
}
.homePage__letterAnim--12 {
  animation-delay: 1.2s;
}

.letterAppearanceAnimation {
  transform: translateY(-70rem);
  pointer-events: none;
  animation-name: letterAppearance;
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
.animationClassReset {
  transition: all 0.3s ease-in;
  animation-name: none;
  animation-delay: none;
}
.mouseOverAnim {
  color: $main-color;
  animation-name: letterAnimation;
  animation-delay: 0s !important;
  animation-duration: 1s;
  animation-iteration-count: 1;
}
@keyframes letterAppearance {
  0% {
    transform: translateY(-70rem);
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
@media (min-width: 768px) {
  .mobileBreakLine {
    display: none;
  }
}
</style>
