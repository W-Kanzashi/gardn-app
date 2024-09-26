import type { ImageStyle } from "expo-image";
import type { Href } from "expo-router";
import type {
  PressableProps,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Image } from "expo-image";
import { Link } from "expo-router";

import { Pressable } from "./button";
import { Text } from "./text";
import { View } from "./view";

const componentMap = {
  view: (props: { children: React.ReactNode; style?: ViewStyle }) => {
    return <View {...props}>{props.children}</View>;
  },
  text: (props: { text: string; style?: TextStyle }) => (
    <Text {...props}>{props.text}</Text>
  ),
  button: (props: {
    children: React.ReactNode;
    eventHandlers?: Record<
      Extract<keyof PressableProps, `on${string}`>,
      string
    >;
    style?: ViewStyle;
  }) => {
    // Handler all `on${string}` events
    if (props.eventHandlers) {
      for (const [key, value] of Object.entries(props.eventHandlers) as [
        Extract<keyof PressableProps, `on${string}`>,
        string,
      ][]) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        props.eventHandlers[key] = eval(value);
      }
    }

    return (
      <Pressable {...props} {...props.eventHandlers}>
        {props.children}
      </Pressable>
    );
  },
  link: (props: { href: Href<string>; children: React.ReactNode }) => {
    return (
      <Link {...props} asChild>
        {props.children}
      </Link>
    );
  },
  scrollview: (props: {
    children: React.ReactNode;
    className?: string;
    style?: ViewStyle;
  }) => <ScrollView {...props}>{props.children}</ScrollView>,
  image: (props: {
    url: string;
    style?: StyleProp<ImageStyle>;
    placeholder?: string;
  }) => {
    return (
      <Image
        source={props.url}
        style={props.style}
        alt="image"
        contentFit="cover"
      />
    );
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} satisfies Record<string, React.FC<any>>;

export type Components = Exclude<keyof typeof componentMap, "icon">;

export type ComponentType<T extends Components> =
  | {
      key: string;
      type: "scrollview";
      style?: ViewStyle;
      children: ComponentType<"text">[];
    }
  | {
      key: string;
      type: "view";
      style?: ViewStyle;
      children: ComponentType<T>[];
    }
  | {
      key: string;
      type: "text";
      text: string;
      style?: TextStyle;
    }
  | {
      key: string;
      type: "view";
      style?: ViewStyle;
      children?: ComponentType<T>[];
    }
  | {
      key: string;
      type: "button";
      eventHandlers: Partial<
        Record<Extract<keyof PressableProps, `on${string}`>, string>
      >;
      style?: ViewStyle;
      children: ComponentType<"text">[];
    }
  | {
      key: string;
      type: "link";
      href: string;
      style?: ViewStyle;
      children: ComponentType<"button">;
    }
  | {
      key: string;
      type: "image";
      url: string;
      style?: ViewStyle;
    };

export function renderComponent<T extends Components>(
  component: ComponentType<T>,
): React.ReactNode {
  // Get the component to render
  const Component = componentMap[component.type];

  switch (component.type) {
    case "scrollview": {
      const children = component.children.map(renderComponent);

      return (
        <Component key={component.key} style={component.style}>
          {children}
        </Component>
      );
    }
    case "view": {
      const children = component.children
        ? component.children.map(renderComponent)
        : null;

      return (
        <Component
          key={component.key}
          style={component.style}
          className={component.className}
        >
          {children}
        </Component>
      );
    }
    case "text": {
      return (
        <Component
          key={component.key}
          style={component.style}
          text={component.text}
          className={component.className}
        />
      );
    }
    case "button": {
      return (
        <Component
          key={component.key}
          eventHandlers={component.eventHandlers}
          style={component.style}
          className={component.className}
        >
          {component.children.map(renderComponent)}
        </Component>
      );
    }
    case "link": {
      return (
        <Component
          key={component.key}
          style={component.style}
          href={component.href}
          className={component.className}
        >
          {renderComponent(component.children)}
        </Component>
      );
    }
    case "image": {
      return (
        <Component
          key={component.key}
          style={component.style}
          url={component.url}
          placeholder={component.placeholder}
        />
      );
    }
    default: {
      console.error("Invalid component type", component);
      return null;
    }
  }
}
