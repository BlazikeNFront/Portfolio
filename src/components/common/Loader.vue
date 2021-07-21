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
  width: 80px;
  height: 80px;
}
.loader__ripple {
  position: absolute;
  border: 4px solid $neon-green;
  opacity: 1;
  border-radius: 50%;
  animation: loaderRipple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.loader__ripple:nth-child(2) {
  animation-delay: 0.5s;
}

@keyframes loaderRipple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>