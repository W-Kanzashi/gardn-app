import type { PressableProps, TextStyle, ViewStyle } from "react-native";
import React from "react";
import { Link } from "expo-router";

import { Pressable } from "./button";
import { Text } from "./text";
import { View } from "./view";

const componentMap = {
  view: (props) => <View {...props}>{props.children}</View>,
  text: (props) => <Text {...props}>{props.text}</Text>,
  button: (props) => {
    // Handler all `on${string}` events
    for (const [key, value] of Object.entries(props.eventHandlers)) {
      props.eventHandlers[key] = eval(value);
    }

    return (
      <Pressable {...props} {...props.eventHandlers}>
        {props.children}
      </Pressable>
    );
  },
  link: (props) => <Link {...props}>{props.children}</Link>,
  icon: (props) => <View {...props}>{props.children}</View>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} satisfies Record<string, React.FC<any>>;

export type Components = Exclude<keyof typeof componentMap, "icon">;

export type ComponentType<T extends Components> =
  | {
      key: "root";
      title: string;
      type: "view";
      style?: ViewStyle;
      props?: Exclude<React.ElementRef<Components>, "style">;
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
      props?: Exclude<React.ElementRef<Components>, "style">;
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
      props?: Exclude<React.ElementRef<Components>, "style">;
      children: ComponentType<"text">[];
    }
  | {
      key: string;
      type: "link";
      href: string;
      style?: ViewStyle;
      props?: Exclude<React.ElementRef<Components>, "style">;
      children: ComponentType<"text">[];
    }
  | {
      key: string;
      type: "icon";
      icon: React.ReactNode;
      style?: ViewStyle;
      props?: Exclude<React.ElementRef<Components>, "style">;
    };

export function renderComponent<T extends Components>(
  component: ComponentType<T>,
): React.ReactNode {
  // Get the component to render
  const Component = componentMap[component.type];

  switch (component.type) {
    case "view": {
      const children = component.children
        ? component.children.map(renderComponent)
        : null;

      return (
        <Component
          key={component.key}
          {...component.props}
          style={component.style}
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
        />
      );
    }
    case "button": {
      return (
        <Component
          key={component.key}
          eventHandlers={component.eventHandlers}
          {...component.props}
          style={component.style}
        >
          {component.children.map(renderComponent)}
        </Component>
      );
    }
    case "link": {
      console.log("link", component);
      return (
        <Component
          key={component.key}
          {...component.props}
          style={component.style}
          href={component.href}
        >
          {component.children.map(renderComponent)}
        </Component>
      );
    }
    case "icon": {
      return (
        <Component
          key={component.key}
          {...component.props}
          style={component.style}
        >
          {component.icon}
        </Component>
      );
    }
    default: {
      console.error("Invalid component type");
      return null;
    }
  }
}
