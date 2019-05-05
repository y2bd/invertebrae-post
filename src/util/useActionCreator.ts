import { Action } from "./action";
import React from "react";

export default function useActionCreator<K extends string, A extends any[]>(
  actionCreator: (...args: A) => Action<K, any>,
  dispatch: (action: any) => void
): (...args: A) => void {
  return React.useCallback((...args) => dispatch(actionCreator(...args)), [
    actionCreator,
    dispatch
  ]);
}
