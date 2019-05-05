import * as React from "react";

export default function combineReducers<S, A>(
  reducerMap: { [P in keyof S]: React.Reducer<S[P], any> }
): React.Reducer<S, A> {
  return (prevState, action) =>
    (Object.keys(reducerMap) as Array<keyof S>).reduce(
      (accState, reducerKey: keyof S) => ({
        ...accState,
        [reducerKey]: reducerMap[reducerKey](prevState[reducerKey], action)
      }),
      prevState
    );
}
