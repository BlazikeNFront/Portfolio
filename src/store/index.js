import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      projects: [
        {
          name: "dataWarehouse",
          title: "Data Warehouse",
          images: ["dataWarehouse.png"],
          description:
            "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
          techstack: [
            { src: "html5Badge.svg", alt: "HTML5", dropShadow: "#e44f26" },
            { src: "cssBadge.svg", alt: "CSS3", dropShadow: "#1572b6" },
            {
              src: "javascriptBadge.svg",
              alt: "Vanilla JavaScript",
              dropShadow: "#f0db4f",
            },
          ],
          links: [{ links: { github: "NPFkekw", live: "NPFkekm" } }],
        },
        {
          name: "weatherApp",
          title: "Weather App",
          images: ["weatherApp.png"],
          description:
            "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
          techstack: [
            { src: "html5Badge.svg", alt: "HTML5", dropShadow: "#e44f26" },
            { src: "cssBadge.svg", alt: "CSS3", dropShadow: "#1572b6" },
            {
              src: "javascriptBadge.svg",
              alt: "Vanilla JavaScript",
              dropShadow: "#f0db4f",
            },
          ],
          links: [{ links: { github: "NPFkekw", live: "NPFkekm" } }],
        },
        {
          name: "movieApp",
          title: "Movie App",
          images: ["movieApp.png"],
          description:
            "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
          techstack: [
            { src: "vueBadge.svg", alt: "Vue", dropShadow: "#41b883" },
            { src: "vuexBadge.svg", alt: "Vuex", dropShadow: "#41b883" },
            {
              src: "vueRouterBadge.svg",
              alt: "Vue Router",
              dropShadow: "#41b883",
            },
            {
              src: "firebaseBadge.svg",
              alt: "FireBase",
              dropShadow: "#f0db4f",
            },
          ],
          links: [{ links: { github: "NPFkekw", live: "NPFkekm" } }],
        },
        {
          name: "projectRAS",
          title: "Project RAS",
          images: ["movieApp.png"],
          description:
            "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
          techstack: [
            { src: "vueBadge.svg", alt: "Vue", dropShadow: "#41b883" },
            { src: "vuexBadge.svg", alt: "Vuex", dropShadow: "#41b883" },
            { src: "nodeBadge.svg", alt: "NodeJS", dropShadow: "#41b883" },
            { src: "expressBadge.svg", alt: "Express", dropShadow: "#ffffff" },
            { src: "mongodbBadge.svg", alt: "MongoDB", dropShadow: "#ffffff" },
            {
              src: "raspberryPiBadge.svg",
              alt: "Raspberry Pi",
              dropShadow: "#c31c4a",
            },
          ],
          links: [{ links: { github: "NPFkekw", live: "NPFkekm" } }],
        },
        {
          name: "taimenShop",
          title: "Taimen Shop",
          images: ["movieApp.png"],
          description:
            "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical LatinWhere does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin",
          techstack: [
            { src: "vueBadge.svg", alt: "Vue", dropShadow: "#41b883" },
            { src: "vuexBadge.svg", alt: "Vuex", dropShadow: "#41b883" },
            {
              src: "vueRouterBadge.svg",
              alt: "Vue Router",
              dropShadow: "#41b883",
            },
            { src: "nodeBadge.svg", alt: "NodeJS", dropShadow: "#41b883" },
            { src: "expressBadge.svg", alt: "Express", dropShadow: "#ffffff" },
            { src: "mongodbBadge.svg", alt: "MongoDB", dropShadow: "#ffffff" },
          ],
          links: [{ links: { github: "NPFkekw", live: "NPFkekm" } }],
        },
      ],
      isPageLoading: false,
      showLoaderBar: false,
      loadedPages: {
        homePage: true, //initial request
        pageLoader: true, //initial request
        aboutPage: false,
        projectsPage: false,
        projectDetailsPage: false,
        contactPage: false,
      },
    };
  },
  mutations: {
    setLoadedPage(state, payload) {
      state.loadedPages[payload] = true;
      console.log(state.loadedPages[payload]);
    },
    isPageLoading(state, payload) {
      state.isPageLoading = payload;
    },
    setShowProgressBar(state, payload) {
      state.showLoaderBar = payload;
    },
  },
  actions: {
    setLoadedPage(context, payload) {
      //payload is a name of page in loadedPages object;
      context.commit("setLoadedPage", payload);
    },
    setIsPageLoading(context, payload) {
      context.commit("isPageLoading", payload);
    },
    setShowProgressBar(context, payload) {
      context.commit("setShowProgressBar", payload);
    },
  },
  getters: {
    getAllProjects(state) {
      return state.projects;
    },
    getSingleProject: (state) => (name) => {
      return state.projects.find((project) => project.name === name);
    },

    getLoadedPage: (state) => (pageName) => {
      return state.loadedPages[pageName];
    },
    getIsPageLoading(state) {
      return state.isPageLoading;
    },
    getShowProgressBar(state) {
      return state.showLoaderBar;
    },
  },
});
export default store;
