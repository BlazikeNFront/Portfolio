<template>
  <div class="cursor">
    <div
      class="cursor__circle"
      :style="cursorCircle"
      :class="{ hoverCircle: hoverClass }"
    ></div>
    <div
      class="cursor__pointer"
      :style="cursorPointer"
      :class="{ hoverPointer: hoverClass }"
    ></div>
  </div>
</template>
<script >
import { ref, computed, onMounted } from "vue";
export default {
  setup() {
    const currentMouseXPos = ref(null);
    const currentMouseYPos = ref(null);
    const currentCircleXPosition = ref(null);
    const currentCircleYPosition = ref(null);
    const hoverClass = ref(false);
    const cursorCircle = computed(() => {
      return `transform: translateX(${
        currentCircleXPosition.value - 2
      }px) translateY(${currentCircleYPosition.value - 2}px)`;
    });
    const cursorPointer = computed(() => {
      return `transform: translateX(${
        currentMouseXPos.value - 5
      }px) translateY(${currentMouseYPos.value - 5}px)`;
    });
    function moveCursor(e) {
      currentMouseXPos.value = e.clientX;
      currentMouseYPos.value = e.clientY;
      if (e.target.dataset.cursor === "pointer") {
        hoverClass.value = true;
        setTimeout(() => {
          currentCircleXPosition.value = e.clientX - 18;
          currentCircleYPosition.value = e.clientY - 18;
        }, 100);
        return;
      } else {
        hoverClass.value = false;
        setTimeout(() => {
          currentCircleXPosition.value = e.clientX - 18;
          currentCircleYPosition.value = e.clientY - 18;
        }, 100);
      }
    }
    onMounted(() => {
      document.addEventListener("mousemove", (e) => {
        moveCursor(e);
      });
    });
    return { hoverClass, cursorCircle, cursorPointer };
  },
};
</script>

<style lang="scss">
.cursor {
  display: none;
}
.cursor__circle {
  pointer-events: none;
  user-select: none;
  top: 0;
  left: 0;
  position: fixed;
  width: 4rem;
  height: 4rem;
  border: 2px solid #fff;
  border-radius: 50%;
  z-index: 5555;
  backface-visibility: hidden;
  transition: opacity 0.6s ease;
}
.cursor__pointer {
  pointer-events: none;
  user-select: none;
  top: 0;
  left: 0;
  position: fixed;
  width: 1rem;
  height: 1rem;
  background-color: White;
  border-radius: 100%;
  z-index: 5555;
  backface-visibility: hidden;
}
.hoverCircle {
  border: none;

  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    width: 3rem;
    height: 3rem;
    border: 4px solid #dbd800;
    border-radius: 10px;
    animation-name: testingBefore;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}
.hoverPointer {
  width: 1.5rem;
  height: 1.5rem;
  background-color: #dbd800;
}
@media (min-width: 1024px) {
  .cursor {
    display: initial;
  }
}
@keyframes testingBefore {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
@keyframes testingAfter {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
