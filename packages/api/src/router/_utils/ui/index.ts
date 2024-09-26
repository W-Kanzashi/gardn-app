export const ui = {
  id: "wc8nIGxK48XjoVKsF5n3n",
  etag: "1234567890",
  stack: {
    title: "Tomates",
  },
  ui: {
    key: "main",
    type: "view",
    style: {
      height: "100%",
    },
    className: "bg-background",
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
              onPress: '() => alert("Back Button clicked")',
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
                    text: "Home page",
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
            text: "Welcome to the App!",
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
            children: [
              {
                key: "link-shop",
                type: "link",
                href: "/protected/shop",
                children: [
                  {
                    key: "link-shop-text",
                    type: "text",
                    text: "Shop",
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
