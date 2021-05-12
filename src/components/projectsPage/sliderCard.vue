<template>
  <div class="card card__leftSided">
    <div class="card__leftSide"></div>
    <div class="card__rightSide"></div>
  </div>
</template>
<style lang="scss">
.card {
  position: relative;
  width: 35rem;
  height: 50rem;
  background-color: salmon;
  cursor: pointer;
  transform-style: preserve-3d;
}

.card__leftSided {
  transform: perspective(700px) rotateY(40deg);
}
.card__activeSlide {
  transform: perspective(700px) rotateY(0deg);
}
.card__rightSided {
  transform: perspective(700px) rotateY(-40deg);
}
.card__leftSide {
  position: absolute;
  top: -19px;
  left: -43px;
  width: 100px;
  height: 538px;
  background-color: red;
  transform-style: preserve-3d;
  transform: translate3d(0, 0, -9rem) rotateY(108deg);
}
</style>