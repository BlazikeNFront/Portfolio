<template>
  <div class="pageLoaderContainer">
    <div class="pageLoader__loadingView" v-if="!loadingError">
      <h3>Loading...</h3>
      <div class="pageLoader__progressBarContainer">
        <div
          class="pageLoader__progressBar"
          :style="`width:${this.loaderWidth}%`"
        ></div>
      </div>
    </div>
    <div class="pageLoader__errorView" v-else>
      <h3>Error occured :(</h3>
      <p>Check your internet connection</p>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.changeBarProgress();

    setTimeout(() => {
      this.loadingError === true;
    }, 15000);
  },
  data() {
    return {
      loaderWidth: 0,
      loadingError: false,
    };
  },
  computed: {
    isPageLoading() {
      return this.$store.getters["getIsPageLoading"];
    },
  },
  watch: {
    isPageLoading(newVal) {
      if (newVal === false) {
        this.loaderWidth = 100;

        setTimeout(() => {
          this.$store.dispatch("setShowProgressBar", false);
        }, 500);
      }
    },
  },
  methods: {
    changeBarProgress() {
      setTimeout(() => {
        this.changeWidth(10);
      }, 10);
      setTimeout(() => {
        this.changeWidth(35);
      }, 50);
      setTimeout(() => {
        this.changeWidth(60);
      }, 100);
      setTimeout(() => {
        this.changeWidth(90);
      }, 700);
    },
    changeWidth(val) {
      if (this.loaderWidth < val) {
        this.loaderWidth = val;
      }
    },
  },
};
</script>

<style lang='scss'>
.pageLoaderContainer {
  position: absolute;
  right: 0;
  width: 100vw;
  height: 100%;
  background-color: #171717;
  color: White;
  z-index: 1500;
}
.pageLoader__loadingView {
  margin-top: 20rem;
  @include flexColumn;
  align-items: center;
  justify-content: center;
  height: 40rem;
  h3 {
    margin: 4rem;
  }
}
.pageLoader__progressBarContainer {
  margin: 0 auto;
  width: 35rem;
  height: 3rem;
  border-radius: 25px;
  background-color: $nav-bar-background;
}
.pageLoader__progressBar {
  display: block;
  width: 5%;
  height: 100%;
  border-radius: 25px;
  background-color: $main-color;
  transition: all 0.4s ease-in-out;
  box-shadow: 0px 0px 25px $main-color;
}
.pageLoader__errorView {
  @include flexColumn;
  height: 100%;
  h3 {
    margin: 4rem;
  }
  p {
    font-size: 2.5rem;
  }
}
@media (min-width: 768px) {
  .pageLoaderContainer {
    position: fixed;
    top: 0;
    right: 0;
    width: 80vw;
    height: 100vh;
    background-color: #171717;
    color: White;
  }

  .pageLoader__loadingView {
    @include flexColumn;
    margin-top: 0;
    height: 100%;
    h3 {
      margin: 4rem;
    }
  }
  .pageLoader__progressBarContainer {
    margin: 0 auto;
    width: 35rem;
    height: 3rem;
    border-radius: 25px;
    background-color: $nav-bar-background;
  }
  .pageLoader__progressBar {
    display: block;
    width: 5%;
    height: 100%;
    border-radius: 25px;
    background-color: $main-color;
    transition: all 0.4s ease-in-out;
    box-shadow: 0px 0px 25px $main-color;
  }
  .pageLoader__errorView {
    @include flexColumn;
    height: 100%;
    h3 {
      margin: 4rem;
    }
    p {
      font-size: 2.5rem;
    }
  }
}
</style>