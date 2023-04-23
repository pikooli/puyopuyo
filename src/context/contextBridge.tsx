import React from "react";
import type { PuyoPuyoState } from "./contextType";

export const ContextBridge = (props: React.PropsWithChildren<any>) => {
  const { children, Context, render } = props;
  return (
    <Context.Consumer>
      {(value: PuyoPuyoState) =>
        render(<Context.Provider value={value}>{children}</Context.Provider>)
      }
    </Context.Consumer>
  );
};
