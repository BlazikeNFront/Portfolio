import { createRouter, createWebHistory } from "vue-router";

import store from "../store/index.js";

import LoaderPage from "../components/common/PageLoader.vue";

const homePage = () =>
  import(/* webpackChunkName: "homePage" */ "./homePage.vue");

const aboutPage = () =>
  import(/* webpackChunkName: "aboutPage" */ "./aboutPage.vue");

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
      name: "pageLoader",
      path: "/loading",
      component: LoaderPage,
      props: true,
    },
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

router.beforeResolve((to, from, next) => {
  const { name } = to;
  if (!store.getters["getLoadedPage"](name)) {
    store.dispatch("setLoadedPage", name); //set That route is downloaded but dont change page since loader was probably not displayed for whole animiation -- after loader animation, pageLoader component will push again that route but this time the flag in vuex is changed so page will render
    const routerPayload = {
      name: "pageLoader",
      params: { redirectTo: to.name },
    };
    if (to.params.projectName) {
      routerPayload.payload.params.projectName === to.params.projectName;
    }
    next(routerPayload);
    return;
  }
  next();
});

export default router;
