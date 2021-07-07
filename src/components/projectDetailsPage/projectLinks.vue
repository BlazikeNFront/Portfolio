<template>
  <div v-if="links.length <= 1" class="detailsProjectView__linksWrapper">
    <a
      :href="links[0].github"
      target="_blank"
      data-cursor="pointer"
      class="
        detailsProjectView__linkWrapper detailsProjectView__linkWrapper--github
      "
    >
      <github-logo data-cursor="pointer"></github-logo>
      <github-name data-cursor="pointer"></github-name>
    </a>
    <div
      class="
        detailsProjectView__linkWrapper detailsProjectView__linkWrapper--live
      "
    >
      <a :href="links[0].live" target="_blank" data-cursor="pointer">LIVE</a>
      <loader></loader>
    </div>
  </div>
  <div class="detailsProjectView__multipleVersions" v-else>
    <div
      class="multipleVersions__singleVersion"
      v-for="link in links"
      :key="link"
    >
      <h4>{{ link.version }}</h4>
      <div class="mulitpleVersion__singleLinksWrapper">
        <div class="mulitpleVersion__link" data-cursor="pointer">
          <a
            :href="link.github"
            target="_blank"
            data-cursor="pointer"
            class="
              mulitpleVersion__linkWrapper
              multipleVersion__linkWrapper--github
            "
          >
            <github-logo></github-logo>
            <github-name></github-name>
          </a>
        </div>
        <div class="mulitpleVersion__link--live" v-if="link.live">
          <a :href="link.live" target="_blank" data-cursor="pointer">LIVE</a>
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
  setup(props) {
    function kekw() {
      console.log(props.links);
    }
    return { kekw };
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
  display: block;
  margin-top: 1rem;
  width: 15rem;
  height: 10rem;
}

.detailsProjectView__linkWrapper--github {
  @include flexColumn;

  width: 15rem;
  height: 10rem;
  &:focus {
    @include focusAttribute;
  }
  svg {
    margin: 0;
    width: 100%;
    height: 70%;
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
  a {
    &:focus {
      @include focusAttribute;
    }
  }
}
.detailsProjectView__multipleVersions {
  @include flexColumn;
  justify-content: space-evenly;
}
.detailsProjectView__version {
  @include flexColumn;
  width: 35rem;
  padding: 1rem 2rem;
  border: 1px solid $main-color;
  border-radius: 10px;
  justify-content: space-evenly;
  h4 {
    margin: 2rem;
  }
}

.multipleVersion__linkWrapper {
  display: block;
  margin-top: 1rem;
  width: 15rem;
  height: 10rem;
}
.multipleVersions__singleVersion {
  @include flexColumn;
  margin: 1rem;
  padding: 1rem 2rem;
  width: 35rem;
  border: 1px solid $main-color;
  border-radius: 10px;
  justify-content: space-evenly;
  h4 {
    margin: 2rem;
  }
}
.mulitpleVersion__singleLinksWrapper {
  @include flexRow;
  padding: 2rem 0;
  width: 100%;
  justify-content: space-evenly;

  a {
    display: flex;
    text-decoration: none;
    font-size: 3rem;
    font-weight: 600;
    color: white;
    letter-spacing: 3px;
    text-align: center;

    &:hover {
      color: $main-color;
      text-shadow: 0px 0px 5px #7cd0aa;
    }
    &:focus {
      @include focusAttribute;
    }
  }
}
.multipleVersion__linkWrapper--github {
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
.mulitpleVersion__link--live {
  .loader {
    transform: scale(0.7);
  }
  .loader__ripple {
    border: 4px solid red;
  }
}
.detailsProjectView__linksWrapper {
  @include flexRow;
  padding: 2rem 0;
  width: 35rem;
  justify-content: space-evenly;

  a {
    display: flex;
    text-decoration: none;
    font-size: 3rem;
    font-weight: 600;
    color: white;
    letter-spacing: 3px;
    text-align: center;
    cursor: none;

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
      height: 50%;
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
  .multipleVersions__singleVersion {
    width: 40rem;
    padding: 1rem;

    h4 {
      margin: 0;
    }
  }
  .mulitpleVersion__singleLinksWrapper {
    margin-top: 2rem;
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
  .multipleVersions__singleVersion {
    width: 50rem;
    height: 30rem;
  }

  .mulitpleVersion__link--live {
    @include flexRow;
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
    height: 9rem;
  }
  .detailsProjectView__linkWrapper--live {
    a {
      font-size: 3rem;
    }
  }
  .multipleVersions__singleVersion {
    margin: 0.5rem;
    width: 100%;
    height: 20rem;
  }
  .mulitpleVersion__singleLinksWrapper {
    margin-top: 1rem;
    padding: 0;
    flex-direction: row;
    align-items: center;
  }
  .multipleVersion__linkWrapper--github {
    width: 9rem;
  }
  .mulitpleVersion__link--live {
    flex-direction: column;
    .loader {
      display: none;
    }
  }
}
</style>