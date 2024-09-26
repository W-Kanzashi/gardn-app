import { SafeAreaView } from "react-native";
import { Stack } from "expo-router";

import { renderComponent } from "~/components/render";

export default function Unmatched() {
  const data = {
    stack: {},
    ui: {
      key: "root",
      title: "Not found",
      type: "view",
      style: {
        backgroundColor: "#f0f0f0",
        height: "100%",
      },
      children: [
        {
          key: "header",
          type: "view",
          style: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 8,
            borderBottomWidth: 1,
            borderColor: "#ccc",
            paddingVertical: 8,
            paddingHorizontal: 10,
          },
          children: [
            {
              key: "header-back-button",
              type: "button",
              style: {
                alignItems: "center",
                justifyContent: "center",
              },
              eventHandlers: {
                onPress: () => alert("Back Button clicked"),
              },
              props: undefined,
              children: [
                {
                  key: "header-back-button-icon",
                  type: "view",
                  style: {
                    width: 24,
                    height: 24,
                    marginLeft: 8,
                  },
                  children: [
                    {
                      key: "header-back-button-icon-image",
                      type: "text",
                      content: "Home page",
                      style: {
                        width: 24,
                        height: 24,
                      },
                    },
                  ],
                },
              ],
            },
            {
              key: "header-title",
              type: "text",
              text: "Home page",
              style: {
                fontSize: 24,
                color: "#000",
              },
            },
            {
              key: "header-button",
              type: "button",
              style: {
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 4,
                backgroundColor: "black",
              },
              eventHandlers: {
                onPress: "() => console.log('Nav Button clicked')",
              },
              props: undefined,
              children: [
                {
                  key: "header-button-text",
                  type: "text",
                  text: "Settings",
                  style: {
                    fontSize: 16,
                    lineHeight: 21,
                    fontWeight: "bold",
                    letterSpacing: 0.25,
                    color: "white",
                  },
                },
              ],
            },
          ],
        },
        {
          key: "content",
          type: "view",
          style: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          },
          children: [
            {
              key: "title",
              type: "text",
              text: "Page not found",
              style: {
                fontSize: 24,
                color: "#000",
              },
            },
            {
              key: "button",
              type: "button",
              style: {
                alignItems: "center",
                justifyContent: "center",
                paddingHorizontal: 16,
                paddingVertical: 8,
                borderRadius: 4,
                backgroundColor: "black",
              },
              eventHandlers: {
                onPress: "() => console.log('Button clicked')",
              },
              props: undefined,
              children: [
                {
                  key: "link-shop",
                  type: "link",
                  href: "/",
                  children: [
                    {
                      key: "link-shop-text",
                      type: "text",
                      text: "Home page",
                      style: {
                        fontSize: 16,
                        lineHeight: 21,
                        fontWeight: "bold",
                        letterSpacing: 0.25,
                        color: "white",
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  };

  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: data.ui.title }} />
      {renderComponent(data.ui)}
    </SafeAreaView>
  );
}
