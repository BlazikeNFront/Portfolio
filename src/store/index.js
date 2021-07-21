import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      projects: [
        {
          name: "dataWarehouse",
          title: "Data Warehouse",
          images: ["dataWarehouse.webp"],
          description:
            "Simple landing page, that is based on figma free template. It's my first project, so i used most basic Front-End technologies. I played a little bit with slider animation on mobile - don't hesitate to check it out.",
          techstack: [
            { src: "html5Badge.svg", alt: "HTML5", dropShadow: "#e44f26" },
            { src: "cssBadge.svg", alt: "CSS3", dropShadow: "#1572b6" },
            {
              src: "javascriptBadge.svg",
              alt: "Vanilla JavaScript",
              dropShadow: "#f0db4f",
            },
          ],
          links: [
            {
              github: "https://github.com/BlazikeNFront/Data-warehouse",
              live: "https://datawarehouse-e8491.web.app",
            },
          ],
        },
        {
          name: "weatherApp",
          title: "Weather App",
          images: ["weatherApp.webp"],
          description:
            "Application for checking the weather,but in addition to basic information, it can create temperatures charts for the next 3 days. Charts are created with help of JavaScript and CSS (no canvas).",
          techstack: [
            { src: "html5Badge.svg", alt: "HTML5", dropShadow: "#e44f26" },
            { src: "cssBadge.svg", alt: "CSS3", dropShadow: "#1572b6" },
            {
              src: "javascriptBadge.svg",
              alt: "Vanilla JavaScript",
              dropShadow: "#f0db4f",
            },
          ],
          links: [
            {
              github: "https://github.com/BlazikeNFront/WeatherApp",
              live: "http://weatherapp-28b2d.web.app/",
            },
          ],
        },
        {
          name: "movieApp",
          title: "Movie App",
          images: ["movieApp.webp"],
          description:
            "My first application based on the Vue environment. It is a mobile web application that allows  users to get basic information about movies, TV shows and celebrities.  Users can also create an account (through Firebase REST API) and rate shows and actors. Only mobile view",
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
          links: [
            {
              github: "https://github.com/BlazikeNFront/MovieApp",
              live: "https://movieapp-vueimdb.herokuapp.com",
            },
          ],
        },
        {
          name: "projectRAS",
          title: "Project RAS",
          images: ["projectRAS.webp"],
          description:
            "After some time of studying Web technologies, I came back to the idea of ​​creating an IoT application that would allow user to control Recirculating Aquaculture Systems with Raspberry PI. It took some time to create it and i  work on it, but the basic version is out and it works pretty well (at least for me: D). Whole app is based on 3 parts -  Node app on Raspberry,which checks enviroment  and reacts to changes. In addition it sends (if connected to local network)  Front-End part, which sends information about the system and allow user remote controll in real time (WebSocket Technology), after authentication. Third part is a Back-End app that sholud be deployed on any hosting providing service. It allows the same functionality as the Raspberry app, but via global network. Right now Raspberry App   version  is OFF (RAS rebuild), but You can still check Front-End part. For more information check out Github - i did some kind of basic documentation",
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
          links: [
            {
              github: "https://github.com/BlazikeNFront/ProjectRAS--NPF",
              live: "https://project-ras.herokuapp.com/",
            },
          ],
        },
        {
          name: "taimenShop",
          title: "Taimen Shop",
          images: ["taimenShop.webp"],
          description:
            "MEVN Fullstack project. A simple online shop with fishing equipment and a small CMS for admin, that allows  adding products or accepting orders. BackEnd uses multer and Jimp to process images of uploaded products. I also created 2 Front-End version with diffrent API-s that Vue 3 offers.",
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
          links: [
            {
              version: "Options API",
              github: "https://github.com/BlazikeNFront/VueShop",
              live: "https://taimen-shop-options.herokuapp.com/",
            },
            {
              version: "Composition API",
              github:
                "https://github.com/BlazikeNFront/VueShop--CompositionApi",
              live: "https://taimenshopcomposition.web.app/",
            },
            {
              version: "BackEnd",
              github:
                "https://github.com/BlazikeNFront/VueShop--CompositionApi",
            },
          ],
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
    getSingleProjectIndex: (state) => (name) => {
      return state.projects.findIndex((project) => project.name === name);
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
