import { computed } from "vue";

export default function useNavigationLinks() {
  const homePageLink = computed(() => {
    return { name: "pageLoader", params: { redirectTo: "homePage" } };
  });
  const aboutPageLink = computed(() => {
    return { name: "pageLoader", params: { redirectTo: "aboutPage" } };
  });
  const projectsPageLink = computed(() => {
    return { name: "pageLoader", params: { redirectTo: "projectsPage" } };
  });
  const contactPageLink = computed(() => {
    return { name: "pageLoader", params: { redirectTo: "contactPage" } };
  });

  return { homePageLink, aboutPageLink, projectsPageLink, contactPageLink };
}
