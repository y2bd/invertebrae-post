import * as React from "react";
import reducer, { State, Actions, initialState } from "./Store.reducer";

export type StoreContextProps<S, A> = {
  state: S;
  dispatch(action: A): void;
};

export const StoreContext = React.createContext<
  StoreContextProps<State, Actions>
>({
  state: void 0 as any,
  dispatch: () => void 0 as any
});

const Store: React.FC = React.memo(({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const storeContextProps = React.useMemo(
    () => ({
      state,
      dispatch: (action: any) => (
        console.log("dispatching", action), dispatch(action)
      )
    }),
    [state, dispatch]
  );

  return (
    <StoreContext.Provider value={storeContextProps}>
      {children}
    </StoreContext.Provider>
  );
});

export default Store;
