import { createApp } from "vue";
import App from "./App.vue";

//vuex
import store from "./store/index.js";

//Vue-router

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
  faFax,
  faIdCard,
  faBriefcase,
  faShoppingCart,
  faCartArrowDown,
  faArrowRight,
  faTruck,
  faStar,
  faHome,
  faCoins,
  faSearch,
  faUser,
  faTimes,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faPhone,
  faEnvelope,

  faIdCard,
  faMapMarkerAlt,
  faFax,
  faBriefcase,
  faShoppingCart,
  faHome,
  faCartArrowDown,
  faArrowRight,
  faTruck,
  faStar,
  faCoins,
  faSearch,
  faUser,
  faTimes,
  faCheck
);

const app = createApp(App);
app.use(store);
/* app.use(router); */
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
