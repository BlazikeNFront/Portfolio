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
    if (!this.isPageLoaded) {
      this.startFetchingPage();
    }
    /*  setTimeout(() => {
      this.loaderWidth = 40;
    }, 500);
    setTimeout(() => {
      this.loaderWidth = 55;
    }, 700);
    setTimeout(() => {
      this.loaderWidth = 90;
    }, 900); */
    setTimeout(() => {
      this.allowPageChange = true;
    }, 1);
    setTimeout(() => {
      this.loadingError === true;
    }, 15000);
  },
  data() {
    return {
      allowPageChange: false,
      fallbackPage: "homePage",
      redirectTo: this.$route.params.redirectTo,

      loaderWidth: 0,
      loadingError: false,
    };
  },
  computed: {
    isPageLoaded() {
      if (!this.redirectTo) {
        return true;
      }
      return this.$store.getters["getLoadedPage"](this.redirectTo);
    },
    redirectPage() {
      if (this.redirectTo) {
        return this.redirectTo;
      }
      return "homePage";
    },
    routerPayload() {
      const routerPayload = {
        params: {},
        name: this.redirectTo,
      };
      if (this.$route.params.projectName) {
        routerPayload.params.projectName = this.$route.params.projectName;
      }
      return routerPayload;
    },
  },
  watch: {
    allowPageChange(boolean) {
      if (boolean === true && this.isPageLoaded) {
        this.loaderWidth = 100;

        setTimeout(() => {
          this.$router.push(this.routerPayload);
        }, 400);
      }
    },
    isPageLoaded(boolean) {
      if (boolean === true && this.allowPageChange) {
        this.loaderWidth = 100;
        setTimeout(() => {
          this.$router.push(this.routerPayload);
        }, 400);
      }
    },
  },
  methods: {
    startFetchingPage() {
      this.$router.push(this.routerPayload);
    },
  },
};
</script>

<style lang='scss'>
.pageLoaderContainer {
  width: 100%;
  height: 100vh;
  color: White;
}
.pageLoader__loadingView {
  @include flexColumn;
  height: 100%;
  h3 {
    margin: 4rem;
  }
}
.pageLoader__progressBarContainer {
  margin: 0 auto;
  width: 40rem;
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
</style>