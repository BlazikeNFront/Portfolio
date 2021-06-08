import { createRouter, createWebHistory } from "vue-router";

//pages

const homePage = () => import("./homePage.vue");
const aboutPage = () => import("./aboutPage.vue");
const projectsPage = () => import("./projectsPage.vue");
const projectDetailsPage = () => import("./projectDetailsPage.vue");
const contactPage = () => import("./contactPage.vue");
//loader

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "home",
      path: "/",
      component: homePage,
    },
    {
      name: "about",
      path: "/aboutMe",
      component: aboutPage,
    },
    {
      name: "myProjects",
      path: "/projects",
      component: projectsPage,
    },
    {
      name: "projectDetails",
      path: "/projects/:projectName",
      component: projectDetailsPage,
    },

    {
      name: "contact",
      path: "/contact",
      component: contactPage,
    },
  ],
});
router.beforeEach((to, from, next) => {
  if (typeof to.matched[0]?.components.default === "function") {
    console.log("kekw");
  }
  next();
});

router.beforeResolve((to, from, next) => {
  /* $eventHub.$emit("asyncComponentLoaded"); */ // Stop progress bar

  next();
});

export default router;
