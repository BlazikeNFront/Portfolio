<template>
  <button class="baseButton" data-cursor="pointer">
    <span class="baseButton__span" data-cursor="pointer"></span>
    <slot></slot>
  </button>
</template>
<style lang='scss'>
.baseButton {
  width: 26rem;
  height: 7rem;
  border: 1px solid $main-color;
  border-radius: 35px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: transparent;
  cursor: none;

  &:hover {
    span {
      left: -4%;
    }
  }
  &:focus {
    @include focusAttribute;
  }
}
.baseButton__span {
  position: absolute;
  left: -110%;
  background-color: #36ff7c;
  width: 107%;
  height: 7rem;
  transform: skewX(-10deg);
  transition: 0.3s ease-out all;
}
</style>