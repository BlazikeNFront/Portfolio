import { createApp } from "vue";
import App from "./App.vue";

//vuex
import store from "./store/index.js";

//Vue-router
import router from "./router/router.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faIdCard,
  faBriefcase,
  faArrowRight,
  faHome,
  faUser,
  faTimes,
  faBars,
  faSmileBeam,
} from "@fortawesome/free-solid-svg-icons";
import { faSass, faNode } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faIdCard,
  faBriefcase,
  faHome,
  faArrowRight,
  faUser,
  faTimes,
  faSass,
  faNode,
  faBars,
  faSmileBeam
);
//global components
//global components
import BaseButton from "./components/common/BaseButton.vue";
import Loader from "./components/common/Loader.vue";

const app = createApp(App);
app.component("base-button", BaseButton);
app.component("loader", Loader);
app.use(store);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
