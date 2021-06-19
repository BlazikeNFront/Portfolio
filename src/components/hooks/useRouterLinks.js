import { computed } from "vue";

export default function useNavigationLinks() {
  const homePageLink = computed(() => {
    return { name: "homePage", params: { redirectTo: "homePage" } };
  });
  const aboutPageLink = computed(() => {
    return { name: "aboutPage", params: { redirectTo: "aboutPage" } };
  });
  const projectsPageLink = computed(() => {
    return { name: "projectsPage", params: { redirectTo: "projectsPage" } };
  });
  const contactPageLink = computed(() => {
    return { name: "contactPage", params: { redirectTo: "contactPage" } };
  });

  return { homePageLink, aboutPageLink, projectsPageLink, contactPageLink };
}
