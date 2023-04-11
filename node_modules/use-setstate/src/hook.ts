import * as React from "react";
import { isFunction, TypedFunction, FunctionOrValue, TypedValue, HookType } from "./helpers";

/**
 * The useSetState melds the useState hook with the state change callback that is provided by the setState method of class based components.
 *
 * @param initial
 * @param callback
 */
export const useSetState = <T extends TypedValue>(initial?: FunctionOrValue<T>, callback?: TypedFunction<T, void>): HookType<T> => {
  const [value, setValue] = React.useState<T>(initial);

  if (callback !== undefined) {
    const hasRun = React.useRef(false);

    if (isFunction(callback)) {
      React.useEffect((): void => {
        if (hasRun.current) {
          callback(value);
        } else {
          hasRun.current = true;
        }
      }, [value]);
    } else if (!hasRun.current) {
      console.warn(`useSetState: function type for callback argument expected. Found callback of type "${typeof callback}"`);
      hasRun.current = true;
    }
  }

  const applyValue = (newValue: T): void => {
    if (typeof value === "object" && typeof newValue === "object") {
      setValue({ ...value, ...newValue });
    } else {
      setValue(newValue);
    }
  };

  const setState = (state: FunctionOrValue<T>): void => {
    if (isFunction(state)) {
      const transform = state as TypedFunction<T, T>;
      setValue(transform(value));
    } else {
      applyValue(state as T);
    }
  };

  return [value, setState];
};
