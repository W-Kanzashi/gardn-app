import { SafeAreaView } from "react-native";

import { renderComponent } from "~/components/render";
import { api } from "~/utils/api";

export default function Page() {
  const { data: uiData } = api.expo.getByPage.useQuery({
    type: "page",
    page: "[shop]",
  });

  if (!uiData) {
    return null;
  }
  return (
    <SafeAreaView className="flex flex-1">
      {/* Main page */}
      {renderComponent(uiData.ui)}
    </SafeAreaView>
  );
}
