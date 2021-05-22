import { computed } from "vue";

export default function useNavigationLinks() {
  const homePageLink = computed(() => {
    return { name: "home" };
  });
  const aboutPageLink = computed(() => {
    return { name: "about" };
  });
  const projectsPageLink = computed(() => {
    return { name: "myProjects" };
  });
  const contactPageLink = computed(() => {
    return { name: "contact" };
  });
  return { homePageLink, aboutPageLink, projectsPageLink, contactPageLink };
}
