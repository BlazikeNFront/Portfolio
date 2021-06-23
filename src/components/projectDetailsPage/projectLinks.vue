<template>
  <div v-if="links.length === 1" class="detailsProjectView__linksWrapper">
    <div
      class="
        detailsProjectView__linkWrapper detailsProjectView__linkWrapper--github
      "
    >
      <github-logo></github-logo>
      <github-name></github-name>
    </div>
    <div
      class="
        detailsProjectView__linkWrapper detailsProjectView__linkWrapper--live
      "
    >
      <a>LIVE</a>
      <loader></loader>
    </div>
  </div>
  <div class="detailsProjectView__multipleVersions" v-else>
    <div class="detailsProjectView__version" v-for="link in links" :key="link">
      <h4>{{ link.version }}</h4>
      <div class="detailsProjectView__linksWrapper">
        <div class="detailsProjectView__link" data-cursor="pointer">
          <github-logo></github-logo>
          <github-name></github-name>
        </div>
        <div class="detailsProjectView__link">
          <a>LIVE</a>
          <loader></loader>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import GithubLogo from "../../assets/logos/githubLogoBadge.vue";
import GithubName from "../../assets/logos/githubBadge.vue";

export default {
  components: {
    GithubLogo,
    GithubName,
  },
  props: {
    links: {
      required: true,
    },
  },
};
</script>
<style lang="scss">
.detailsProjectView__link {
  @include flexRow;
  a {
    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 3px;

    &:hover {
      color: $main-color;
      text-shadow: 0px 0px 5px #7cd0aa;
    }
  }
}
.detailsProjectView__linkWrapper {
  margin-top: 1rem;
  width: 15rem;
  height: 10rem;
}

.detailsProjectView__linkWrapper--github {
  @include flexColumn;
  width: 15rem;
  height: 10rem;

  svg {
    width: 100%;
    height: 100%;
    fill: white;
  }
  &:hover {
    svg {
      fill: $main-color;
      filter: drop-shadow(0px 0px 3px $main-color);
    }
  }
}
.detailsProjectView__linkWrapper--live {
  @include flexRow;
  justify-content: space-between;
}
.detailsProjectView__multipleVersions {
  @include flexRow;
  justify-content: space-evenly;
}
.detailsProjectView__version {
  @include flexColumn;
  width: 25rem;
  padding: 1rem 2rem;
  border: 1px solid $main-color;
  border-radius: 10px;
  justify-content: space-evenly;
  h4 {
    margin: 2rem;
  }
}
.detailsProjectView__linksWrapper {
  @include flexRow;
  padding: 2rem 0;
  width: 35rem;
  justify-content: space-between;

  a {
    display: block;

    font-size: 3rem;
    font-weight: 600;
    letter-spacing: 3px;
    text-align: center;

    &:hover {
      color: $main-color;
      text-shadow: 0px 0px 5px #7cd0aa;
    }
  }
}
.detailsProjectView__linkWrapper--live {
  .loader {
    transform: scale(0.7);
  }
  .loader__ripple {
    border: 4px solid red;
  }
}
@media (min-width: 768px) {
  .detailsProjectView__link {
    @include flexRow;
    a {
      font-size: 3rem;
      font-weight: 600;
      letter-spacing: 3px;

      &:hover {
        color: $main-color;
        text-shadow: 0px 0px 5px #7cd0aa;
      }
    }
  }
  .detailsProjectView__linkWrapper {
    margin-top: 5rem;
    width: 15rem;
    height: 10rem;
  }

  .detailsProjectView__linkWrapper--github {
    @include flexColumn;
    width: 10rem;
    height: 10rem;

    svg {
      width: 100%;
      height: 100%;
      fill: white;
    }
    &:hover {
      svg {
        fill: $main-color;
        filter: drop-shadow(0px 0px 3px $main-color);
      }
    }
  }
  .detailsProjectView__linkWrapper--live {
    @include flexRow;
    justify-content: space-between;
  }
  .detailsProjectView__multipleVersions {
    @include flexRow;
    justify-content: space-evenly;
  }
  .detailsProjectView__version {
    @include flexColumn;
    width: 25rem;
    padding: 1rem 2rem;
    border: 1px solid $main-color;
    border-radius: 10px;
    justify-content: space-evenly;
    h4 {
      margin: 2rem;
    }
  }
  .detailsProjectView__linksWrapper {
    @include flexRow;
    width: 40rem;
    justify-content: space-between;

    a {
      display: block;

      font-size: 3rem;
      font-weight: 600;
      letter-spacing: 3px;
      text-align: center;

      &:hover {
        color: $main-color;
        text-shadow: 0px 0px 5px #7cd0aa;
      }
    }
  }
  .detailsProjectView__linkWrapper--live {
    .loader {
      transform: scale(0.7);
    }
    .loader__ripple {
      border: 4px solid red;
    }
  }
}
@media (min-width: 1024px) {
  .detailsProjectView__linkWrapper {
    margin-top: 5rem;
    width: 10rem;
    height: 15rem;
    a {
      font-size: 4rem;
    }
  }

  .detailsProjectView__linkWrapper--github {
    @include flexColumn;
    width: 15rem;
    height: 15rem;
  }
  .detailsProjectView__linkWrapper--live {
    @include flexRow;
    justify-content: space-between;
  }

  .detailsProjectView__linkWrapper--live {
    .loader {
      transform: scale(0.9);
    }
  }
}

@media (min-width: 1440px) {
  .detailsProjectView__linksWrapper {
    width: 100%;
    height: 15rem;
  }
  .detailsProjectView__linkWrapper {
    margin: 0;
    width: 16rem;
  }
  .detailsProjectView__linkWrapper--github {
    height: 13rem;
  }
  .detailsProjectView__linkWrapper--live {
    a {
      font-size: 3rem;
    }
    .loader {
      transform: scale(1);
    }
  }
}
</style>