export const shop = {
  id: "6JWTT5fBZNGQkxWOWJQ7T",
  etag: "1234567890",
  stack: {
    title: "Shop",
  },
  ui: {
    key: "shop",
    type: "scrollview",
    style: {
      backgroundColor: "#f0f0f0",
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 10,
    },
    children: [
      {
        key: "article-1",
        type: "view",
        style: {
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 10,
          marginBottom: 60,
        },
        children: [
          {
            key: "article-1-1",
            type: "view",
            style: {
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              borderRadius: 20,
              backgroundColor: "white",
              marginTop: 20,
              paddingHorizontal: 30,
              paddingVertical: 20,
              shadowColor: "black",
            },
            children: [
              {
                key: "article-1-1-1",
                type: "text",
                text: "Sonde connecté",
                style: {
                  fontSize: 24,
                  color: "green",
                  fontWeight: "bold",
                },
              },
              {
                key: "article-image-1",
                type: "image",
                url: "https://picsum.photos/seed/picsum/200/300",
                style: {
                  width: "50%",
                  height: "50%",
                },
                placeholder:
                  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[",
              },
              {
                key: "article-1-1-3",
                type: "text",
                text: "Démarrez votre jardin avec notre Starter Pack : graines, conseils et outils et ...",
                style: {
                  fontSize: 18,
                  width: "100%",
                },
              },
              {
                key: "article-1-1-3",
                type: "view",
                style: {
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  gap: 10,
                },
                children: [
                  {
                    key: "article-1-1-3-1",
                    type: "text",
                    text: "50 €",
                    style: {
                      fontSize: 18,
                      fontWeight: 800,
                    },
                  },
                  {
                    key: "article-1-1-3-2",
                    type: "button",
                    eventHandlers: {
                      onPress: "() => console.log('Button pressed')",
                    },
                    style: {
                      fontSize: 18,
                      backgroundColor: "green",
                      paddingHorizontal: 6,
                      paddingVertical: 4,
                      borderRadius: 6,
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 2,
                    },
                    children: [
                      {
                        key: "article-3-1-3-1",
                        type: "text",
                        text: "Voir plus",
                        style: {
                          fontSize: 14,
                          color: "white",
                        },
                      },
                      {
                        key: "article-3-1-3-2",
                        type: "text",
                        text: ">",
                        style: {
                          fontSize: 14,
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
      {
        key: "article-2",
        type: "view",
        style: {
          flexDirection: "row",
          justifyContent: "space-between",
        },
        children: [
          {
            key: "article-3-1",
            type: "view",
            style: {
              justifyContent: "start",
              alignItems: "start",
              gap: 8,
              borderRadius: 20,
              backgroundColor: "white",
              paddingHorizontal: 20,
              paddingTop: 20,
              width: "50%",
              marginRight: 4,
              shadowColor: "black",
            },
            children: [
              {
                key: "article-3-1-1",
                type: "text",
                text: "Starter Pack",
                style: {
                  fontSize: 24,
                  color: "green",
                  fontWeight: "bold",
                },
              },
              {
                key: "article-image-1",
                type: "image",
                url: "https://picsum.photos/seed/picsum/200/300",
                style: {
                  width: "100%",
                  height: "50%",
                },
                placeholder:
                  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[",
              },
              {
                key: "article-3-1-3",
                type: "view",
                style: {
                  flex: 1,
                  gap: 10,
                },
                children: [
                  {
                    key: "article-3-1-3",
                    type: "text",
                    text: "20 €",
                    style: {
                      fontSize: 24,
                      fontWeight: 800,
                      color: "green",
                    },
                  },
                  {
                    key: "article-3-1-3",
                    type: "button",
                    eventHandlers: {
                      onPress: "() => console.log('Button pressed')",
                    },
                    style: {
                      fontSize: 18,
                      backgroundColor: "orange",
                      paddingHorizontal: 6,
                      paddingVertical: 4,
                      borderRadius: 6,
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 2,
                    },
                    children: [
                      {
                        key: "article-3-1-3-1",
                        type: "text",
                        text: "Ajouter au panier",
                        style: {
                          fontSize: 14,
                          color: "white",
                        },
                      },
                      {
                        key: "article-3-1-3-2",
                        type: "text",
                        text: ">",
                        style: {
                          fontSize: 14,
                          color: "white",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            key: "article-3-1",
            type: "view",
            style: {
              flex: 1,
              justifyContent: "start",
              alignItems: "start",
              gap: 8,
              borderRadius: 20,
              backgroundColor: "white",
              paddingHorizontal: 20,
              paddingTop: 20,
              width: "50%",
              marginLeft: 4,
              shadowColor: "black",
            },
            children: [
              {
                key: "article-3-1-1",
                type: "text",
                text: "Seed Starter",
                style: {
                  fontSize: 24,
                  color: "green",
                  fontWeight: "bold",
                },
              },
              {
                key: "article-image-1",
                type: "image",
                url: "https://picsum.photos/seed/picsum/200/300",
                style: {
                  width: "100%",
                  height: "50%",
                },
                placeholder:
                  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[",
              },
              {
                key: "article-3-1-3",
                type: "view",
                style: {
                  gap: 10,
                },
                children: [
                  {
                    key: "article-3-1-3",
                    type: "text",
                    text: "15 €",
                    style: {
                      fontSize: 24,
                      fontWeight: 800,
                      color: "green",
                    },
                  },
                  {
                    key: "article-3-1-3",
                    type: "button",
                    eventHandlers: {
                      onPress: "() => console.log('Button pressed')",
                    },
                    style: {
                      fontSize: 18,
                      backgroundColor: "orange",
                      paddingHorizontal: 6,
                      paddingVertical: 4,
                      borderRadius: 6,
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 2,
                    },
                    children: [
                      {
                        key: "article-3-1-3-1",
                        type: "text",
                        text: "Ajouter au panier",
                        style: {
                          fontSize: 14,
                          color: "white",
                        },
                      },
                      {
                        key: "article-3-1-3-2",
                        type: "text",
                        text: ">",
                        style: {
                          fontSize: 14,
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
    ],
  },
};
