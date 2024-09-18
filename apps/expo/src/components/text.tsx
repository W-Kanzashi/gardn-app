import * as React from "react";
import { Text as NativeText } from "react-native";

const Text = React.forwardRef<
  React.ElementRef<typeof NativeText>,
  React.ComponentPropsWithoutRef<typeof NativeText>
>(({ children, ...props }, ref) => (
  <NativeText ref={ref} {...props}>
    {children}
  </NativeText>
));

Text.displayName = "Text";

export { Text };
