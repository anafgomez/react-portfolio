export type TypedFunction<A, R> = (arg: A) => R;

export type FunctionOrValue<T> = T | (() => T);

export type TypedValue = object | string | number | boolean | null;

export type HookType<T> = [T | undefined, React.Dispatch<React.SetStateAction<T | undefined>>];

/**
 * Returns true if type of value is function
 *
 * @param value
 */
export const isFunction = (value: unknown): boolean => {
  return typeof value === "function";
};
