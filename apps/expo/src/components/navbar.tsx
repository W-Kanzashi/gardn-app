import { renderComponent } from "~/components/render";
import { api } from "~/utils/api";

export function NavBar() {
  const { data: navBarData } = api.expo.getByPage.useQuery({
    type: "layout",
    page: "[nav-bar]",
  });

  if (!navBarData) {
    return null;
  }

  return renderComponent(navBarData.ui);
}
