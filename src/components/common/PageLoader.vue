<template>
  <div class="pageLoaderContainer">
    <div class="pageLoader__loadingView" v-if="!loadingError">
      <h3>Loading...</h3>
      <div class="pageLoader__progressBarContainer">
        <div
          class="pageLoader__progressBar"
          :style="`width:${loaderWidth}%`"
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
import { onMounted, ref, computed, watch } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const loaderWidth = ref(0);
    const loadingError = ref(false);

    const isPageLoading = computed(() => {
      return store.getters["getIsPageLoading"];
    });

    watch(isPageLoading, function (newValue) {
      if (newValue === false) {
        loaderWidth.value = 100;
        setTimeout(() => {
          store.dispatch("setShowProgressBar", false);
        }, 500);
      }
    });
    function changeWidth(val) {
      if (loaderWidth.value < val) {
        loaderWidth.value = val;
      }
    }
    function changeBarProgress() {
      setTimeout(() => {
        changeWidth(10);
      }, 50);
      setTimeout(() => {
        changeWidth(35);
      }, 100);
      setTimeout(() => {
        changeWidth(60);
      }, 200);
      setTimeout(() => {
        changeWidth(90);
      }, 500);
    }

    onMounted(() => {
      changeBarProgress();
      setTimeout(() => {
        loadingError.value === true;
      }, 15000);
    });
    return {
      loadingError,
      loaderWidth,
    };
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
  margin-top: 9rem;
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
  width: 30rem;
  height: 3rem;
  border-radius: 25px;
  background-color: $nav-bar-background;
}
.pageLoader__progressBar {
  display: block;
  width: 5%;
  height: 100%;
  border-radius: 25px;
  background-color: $neon-green;
  transition: all 0.4s ease-in-out;
  box-shadow: 0px 0px 25px $neon-green;
}
.pageLoader__errorView {
  @include flexColumn;
  height: 100%;
  h3 {
    margin: 4rem;
  }
}
@media (min-width: 350px) {
  .pageLoader__progressBarContainer {
    width: 35rem;
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
    background-color: $neon-green;
    transition: all 0.4s ease-in-out;
    box-shadow: 0px 0px 25px $neon-green;
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
@media (min-width: 1440px) {
  .pageLoaderContainer {
    width: 85vw;
  }

  .pageLoader__progressBarContainer {
    width: 45rem;
    height: 4rem;
  }
}
@media (min-width: 1920px) {
  .pageLoaderContainer {
    width: 88vw;
  }
}
</style>