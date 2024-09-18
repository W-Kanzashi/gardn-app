import * as React from "react";
import { Pressable as NativePressable } from "react-native";

const Pressable = React.forwardRef<
  React.ElementRef<typeof NativePressable>,
  React.ComponentPropsWithoutRef<typeof NativePressable>
>(({ children, ...props }, ref) => (
  <NativePressable ref={ref} {...props}>
    {children}
  </NativePressable>
));

Pressable.displayName = "Pressable";

export { Pressable };
