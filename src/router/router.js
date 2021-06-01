import { createRouter, createWebHistory } from "vue-router";
//pages
import homePage from "./homePage.vue";
import aboutPage from "./aboutPage.vue";
import projectsPage from "./projectsPage.vue";
import projectDetailsPage from "./projectDetailsPage.vue";
import contactPage from "./contactPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "home", path: "/", component: homePage },
    { name: "about", path: "/aboutMe", component: aboutPage },
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

    { name: "contact", path: "/contact", component: contactPage },
  ],
});
export default router;
