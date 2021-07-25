<template>
  <div>
    <div class="contactPageLoader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>



<style lang='scss'>
.contactPageLoader {
  display: inline-block;
  position: relative;
  width: 8rem;
  height: 8rem;
}
.contactPageLoader div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 6.4rem;
  height: 6.4rem;
  margin: 0.8rem;
  border: 0.8rem solid #fff;
  border-radius: 50%;
  animation: contactPageLoader 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: $neon-green transparent transparent transparent;
}
.contactPageLoader div:nth-child(1) {
  animation-delay: -0.45s;
}
.contactPageLoader div:nth-child(2) {
  animation-delay: -0.3s;
}
.contactPageLoader div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes contactPageLoader {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>