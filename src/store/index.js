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
            { src: "javascriptBadge.svg", alt: "Javascript" },
          ],
          links: [{ links: { github: "NPFkekw", live: "NPFkekm" } }],
        },
      ],
    };
  },

  getters: {
    getAllProjects(state) {
      return state.projects;
    },
    getSingleProject: (state) => (name) => {
      return state.projects.find((project) => project.name === name);
    },
  },
});
export default store;
