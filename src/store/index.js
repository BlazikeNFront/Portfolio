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
            { src: "html5Badge.svg", alt: "HTML" },
            { src: "cssBadge.svg", alt: "CSS" },
            { src: "javascriptBadge.svg", alt: "Vanilla javascript" },
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
            { src: "html5Badge.svg", alt: "HTML" },
            { src: "cssBadge.svg", alt: "CSS" },
            { src: "javascriptBadge.svg", alt: "Vanilla javascript" },
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
            { src: "vueBadge.svg", alt: "Vue" },
            { src: "vuexBadge.svg", alt: "Vuex" },
            { src: "vueRouterBadge.svg", alt: "Vue Router" },
            { src: "firebaseBadge.svg", alt: "FireBase" },
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
            { src: "vueBadge.svg", alt: "Vue" },
            { src: "vuexBadge.svg", alt: "Vuex" },
            { src: "nodeBadge.svg", alt: "NodeJS" },
            { src: "expressBadge.svg", alt: "Express" },
            { src: "mongodbBadge.svg", alt: "MongoDB" },
            { src: "raspberryPiBadge.svg", alt: "Raspberry Pi" },
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
            { src: "vueBadge.svg", alt: "Vue" },
            { src: "vuexBadge.svg", alt: "Vuex" },
            { src: "vueRouterBadge.svg", alt: "Vue Router" },
            { src: "nodeBadge.svg", alt: "NodeJS" },
            { src: "expressBadge.svg", alt: "Express" },
            { src: "mongodbBadge.svg", alt: "MongoDB" },
          ],
          links: [{ links: { github: "NPFkekw", live: "NPFkekm" } }],
        },
      ],
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
    },
  },
  actions: {
    setLoadedPage(context, payload) {
      //payload is a name of page in loadedPages object;
      context.commit("setLoadedPage", payload);
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
  },
});
export default store;
