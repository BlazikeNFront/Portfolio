<template>
  <div v-if="links.length === 1" class="detailsProjectView__link">
    <div class="detailsProjectView__gitHubLink">
      <github-logo></github-logo>
      <github-name></github-name>
    </div>
    <a>LIVE</a>
  </div>
  <div class="detailsProjectView__multipleVersions" v-else>
    <div class="detailsProjectView__version" v-for="link in links" :key="link">
      <h4>{{ link.version }}</h4>
      <div class="detailsProjectView__linksWrapper">
        <div class="detailsProjectView__gitHubLink">
          <github-logo></github-logo>
          <github-name></github-name>
        </div>
        <a>LIVE</a>
      </div>
    </div>
  </div>
</template>
<script>
import GithubLogo from "../../assets/logos/githubLogo.vue";
import GithubName from "../../assets/logos/githubName.vue";
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
.detailsProjectView__gitHubLink {
  @include flexColumn;
  width: 7rem;
  height: 7rem;
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
  width: 100%;
  justify-content: space-evenly;

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
</style>