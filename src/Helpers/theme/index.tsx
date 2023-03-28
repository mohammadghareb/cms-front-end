import { observer } from "mobx-react-lite";
import * as React from "react";

import { getTheme } from "./getTheme";

export const theme = getTheme();
const MyContext = React.createContext(theme);

export const withTheme = <P extends object>(
  Component: React.ComponentType<P>
) => {
  const ComponentWithTheme: React.ComponentType<P> = (props) => {
    return (
      <MyContext.Consumer>
        {(theme) => {
          const propsWithTheme = {
            ...props,
            theme
          };
          return React.createElement(Component, propsWithTheme);
        }}
      </MyContext.Consumer>
    );
  };
  return observer(ComponentWithTheme);
};
