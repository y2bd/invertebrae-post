import * as Wordbank from "./containers/Wordbank.reducer";
import * as Prompt from "./containers/Prompt.reducer";
import combineReducers from "./util/combineReducers";
import { Action } from "./util/action";

export type State = {
  [Wordbank.reducerKey]: Wordbank.State;
  [Prompt.reducerKey]: Prompt.State;
};

export const initialState: State = {
  [Wordbank.reducerKey]: Wordbank.initialState,
  [Prompt.reducerKey]: Prompt.initialState
};

export type Actions = Action<"noop"> | Wordbank.Actions;

const reducer = combineReducers<State, Actions>({
  [Wordbank.reducerKey]: Wordbank.default,
  [Prompt.reducerKey]: Prompt.default
});
export default reducer;
