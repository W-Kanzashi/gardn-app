import * as React from "react";
import { View as NativeView } from "react-native";

const View = React.forwardRef<
  React.ElementRef<typeof NativeView>,
  React.ComponentPropsWithoutRef<typeof NativeView>
>(({ children, ...props }, ref) => (
  <NativeView ref={ref} {...props}>
    {children}
  </NativeView>
));

View.displayName = "View";

export { View };
