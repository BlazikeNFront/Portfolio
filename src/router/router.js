import { createRouter, createWebHistory } from "vue-router";

import store from "../store/index.js";

const homePage = () =>
  import(/* webpackChunkName: "homePage" */ "./homePage.vue");
const aboutPage = () =>
  import(/* webpackChunkName: "aboutMe" */ "./aboutPage.vue");

const projectsPage = () =>
  import(/* webpackChunkName: "projectsPage" */ "./projectsPage.vue");
const projectDetailsPage = () =>
  import(
    /* webpackChunkName: "projectDetailsPage" */ "./projectDetailsPage.vue"
  );
const contactPage = () =>
  import(/* webpackChunkName: "contactPage" */ "./contactPage.vue");
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "homePage",
      path: "/",
      component: homePage,
    },

    {
      name: "aboutPage",
      path: "/aboutMe",
      component: aboutPage,
    },
    {
      name: "projectsPage",
      path: "/projects",
      component: projectsPage,
    },
    {
      name: "projectDetailsPage",
      path: "/projects/:projectName",
      component: projectDetailsPage,
    },

    {
      name: "contactPage",
      path: "/contact",
      component: contactPage,
    },
  ],
});
router.beforeEach((to, from, next) => {
  const { name } = to;
  if (!store.getters["getLoadedPage"](name)) {
    //set That route is downloaded but dont change page since loader was probably not displayed for whole animiation -- after loader animation, pageLoader component will push again that route but this time the flag in vuex is changed so page will render
    store.dispatch("setShowProgressBar", true);
    store.dispatch("setIsPageLoading", true);
  }
  next();
});

router.beforeResolve((to) => {
  const { name } = to;
  store.dispatch("setLoadedPage", name);
  store.dispatch("setIsPageLoading", false);
});

export default router;
