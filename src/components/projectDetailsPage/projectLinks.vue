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
        <div class="detailsProjectView__link">
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
    cursor: pointer;
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
  cursor: pointer;
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
    cursor: pointer;
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
</style>