<template>
  <div class="loader">
    <div class="loader__ripple"></div>
    <div class="loader__ripple"></div>
  </div>
</template>
<style lang="scss">
.loader {
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 8rem;
}
.loader__ripple {
  position: absolute;
  border: 0.4rem solid $neon-green;
  opacity: 1;
  border-radius: 50%;
  animation: loaderRipple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loader__ripple:nth-child(2) {
  animation-delay: 0.5s;
}

@keyframes loaderRipple {
  0% {
    top: 3.6rem;
    left: 3.6rem;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    width: 7.2rem;
    height: 7.2rem;
    opacity: 0;
  }
}
</style>