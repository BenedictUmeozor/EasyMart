"use client";

import { ReactNode, memo } from "react";

const NoRenderComponent = memo(({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
});

NoRenderComponent.displayName = "NoRenderComponent";

export default NoRenderComponent;
