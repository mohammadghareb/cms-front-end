import { observer  } from "mobx-react-lite";
import { ComponentType } from "react";
import { withTheme } from "../theme";
import { Theme } from "../theme/getTheme";
type TFunc = <P extends object>(
  Component: React.ComponentType<P>
) => React.FunctionComponent<P>;
type TFuncs = TFunc[];

const compose = (...funcs: TFuncs) =>
  funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args)),

    (arg) => arg as React.FunctionComponent
  );

type WithThemeAndObserver = <T extends {}>(
  component: ComponentType<T & { theme: Theme }>
) => ComponentType<T & { theme?: Theme }>;

export const withObserverAndTheme = ((component) => {
  return compose(withTheme, observer)(component);
}) as WithThemeAndObserver;