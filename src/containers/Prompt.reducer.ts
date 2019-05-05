import { Action } from "../util/action";

// state
export type State = {
  chapterWords: { [chapterName: string]: string[] };
};
export const initialState: State = {
  chapterWords: {}
};

// actions
export type AddToPrompt = Action<"addToPrompt", WordChapterPayload>;
export const addToPrompt = (payload: WordChapterPayload): AddToPrompt => ({
  type: "addToPrompt",
  payload
});

export type RemoveFromPrompt = Action<"removeFromPrompt", WordChapterPayload>;
export const removeFromPrompt = (
  payload: WordChapterPayload
): RemoveFromPrompt => ({
  type: "removeFromPrompt",
  payload
});

export type Actions = AddToPrompt | RemoveFromPrompt;

// helpers
type WordChapterPayload = {
  word: string;
  chapterName: string;
};

export const wordsForChapter = (
  state: State,
  chapterName: string
): string[] | undefined => state.chapterWords[chapterName];

// reducer
export const reducerKey = "prompt";
const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case "addToPrompt": {
      const { word, chapterName } = action.payload;
      const words = wordsForChapter(state, chapterName) || [];
      if (words.includes(word)) {
        // don't allow duplicate adding, it can lead to bugs
        return state;
      }

      return {
        ...state,
        chapterWords: {
          ...state.chapterWords,
          [chapterName]: words.concat(word)
        }
      };
    }
    case "removeFromPrompt": {
      const { word, chapterName } = action.payload;
      const words = wordsForChapter(state, chapterName);
      if (!words) {
        return state;
      }

      return {
        ...state,
        chapterWords: {
          ...state.chapterWords,
          // technically bug if you have two of the same word
          [chapterName]: words.filter(oword => oword !== word)
        }
      };
    }
    default:
      return state;
  }
};
export default reducer;
