import * as React from "react";
import { Text as NativeText, Platform } from "react-native";

const Text = React.forwardRef<
  React.ElementRef<typeof NativeText>,
  React.ComponentPropsWithoutRef<typeof NativeText>
>(({ children, ...props }, ref) => (
  <NativeText
    ref={ref}
    {...props}
    style={{
      fontFamily: Platform.select({
        android: "ShantellSans_400Regular",
        ios: "ShantellSans_400Regular",
        default: "ShantellSans_400Regular",
      }),
    }}
  >
    {children}
  </NativeText>
));

Text.displayName = "Text";

export { Text };
