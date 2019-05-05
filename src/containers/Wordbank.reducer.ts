import { Action } from "../util/action";

// state
export type State = {
  words: string[];
  page: number;
};

export const initialState: State = {
  words: ["set", "close"],
  page: 0
};

// actions
export type AddToWordbank = Action<"addToWordbank", string>;
export const addToWordbank = (word: string): AddToWordbank => ({
  type: "addToWordbank",
  payload: word
});

export type RemoveFromWordbank = Action<"removeFromWordbank", string>;
export const removeFromWordbank = (word: string): RemoveFromWordbank => ({
  type: "removeFromWordbank",
  payload: word
});

export type PreviousWordbankPage = Action<"previousWordbankPage">;
export const previousWordbankPage = (): PreviousWordbankPage => ({
  type: "previousWordbankPage",
  payload: undefined
});

export type NextWordbankPage = Action<"nextWordbankPage", undefined>;
export const nextWordbankPage = (): NextWordbankPage => ({
  type: "nextWordbankPage",
  payload: undefined
});

export type Actions =
  | AddToWordbank
  | RemoveFromWordbank
  | PreviousWordbankPage
  | NextWordbankPage;

// helpers
export const perPage = 14;
export const pageCount = (state: State) =>
  Math.floor(state.words.length / perPage) + 1;

// reducer
export const reducerKey = "wordbank";
const reducer = (state: State, action: Action<string, any> & Actions) => {
  const pc = pageCount(state);

  switch (action.type) {
    case "addToWordbank":
      // avoid duplicates
      if (state.words.includes(action.payload)) {
        return state;
      }

      const newWords = [...state.words];
      newWords.splice(state.page * perPage + perPage - 1, 0, action.payload);
      return {
        ...state,
        // always put it at the bottom of the current page
        words: newWords
      };
    case "removeFromWordbank":
      return {
        ...state,
        // technically bug if you have two of the same word
        words: state.words.filter(word => word !== action.payload)
      };
    case "previousWordbankPage":
      return {
        ...state,
        page: Math.max(0, state.page - 1)
      };
    case "nextWordbankPage":
      return {
        ...state,
        page: Math.min(pc - 1, state.page + 1)
      };
    default:
      return state;
  }
};

export default reducer;
