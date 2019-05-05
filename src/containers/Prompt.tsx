import * as React from "react";
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ as dnd } from "react-dnd";
import { StoreContext } from "../Store";
import { Solution } from "../Story";
import Keyword, { KeywordDragProps } from "../text/Keyword";
import { arrayEquals } from "../util/arrayEq";
import useActionCreator from "../util/useActionCreator";
import "./Prompt.css";
import {
  addToPrompt,
  reducerKey,
  removeFromPrompt,
  wordsForChapter
} from "./Prompt.reducer";
import { addToWordbank } from "./Wordbank.reducer";

// component
interface PromptProps {
  readonly currentChapter: string;
  readonly solutions: Solution[];
  readonly onAccept: (nextChapterName: string) => void;
}

const Prompt: React.FC<PromptProps> = React.memo(
  ({ currentChapter, solutions, onAccept }) => {
    // state
    const {
      state: { [reducerKey]: state },
      dispatch
    } = React.useContext(StoreContext);
    const words = wordsForChapter(state, currentChapter) || [];

    // dispatchers
    const uselessOnFinish = React.useCallback(() => void 0, []);
    const addWord = useActionCreator(addToPrompt, dispatch);
    const removeWord = useActionCreator(removeFromPrompt, dispatch);
    const sendToWordbank = useActionCreator(addToWordbank, dispatch);

    // calculated values
    const solutionNextChapter = React.useMemo(() => {
      for (let i = 0; i < solutions.length; i++) {
        const solution = solutions[i];
        if (arrayEquals(solution.answer, words)) {
          return solution.next;
        }
      }
      return undefined;
    }, [solutions, words]);

    // callbacks
    const onAcceptIfSolved = React.useCallback(
      () => solutionNextChapter && onAccept(solutionNextChapter),
      [onAccept, solutionNextChapter]
    );
    const onConsumed = React.useCallback(
      (word: string) => removeWord({ word, chapterName: currentChapter }),
      [currentChapter, removeWord]
    );
    const onSendToWordbox = React.useCallback(
      (word: string) => {
        removeWord({ chapterName: currentChapter, word });
        sendToWordbank(word);
      },
      [currentChapter, removeWord, sendToWordbank]
    );

    // react-dnd
    const [collectionProps, dropRef] = dnd.useDrop<
      KeywordDragProps,
      { target: "puzzle" },
      { hovering: boolean; canDrop: boolean }
    >({
      accept: "keyword",
      canDrop: item => {
        return item.source !== "puzzle";
      },
      collect: monitor => ({
        canDrop: monitor.canDrop(),
        hovering: monitor.isOver()
      }),
      drop: item => {
        addWord({ word: item.id, chapterName: currentChapter });
        return { target: "puzzle" };
      }
    });

    // render
    return (
      <div
        className={
          "Prompt" +
          (collectionProps.hovering && collectionProps.canDrop
            ? " hovering"
            : "")
        }
        ref={dropRef}
      >
        <span className="Symbol">{">"}</span>
        {words.map(word => (
          <Keyword
            key={word}
            text={word}
            location={"puzzle"}
            onFinish={uselessOnFinish}
            onConsumed={onConsumed}
            onDoubleClick={onSendToWordbox}
          />
        ))}
        <span
          className={"OK" + (solutionNextChapter ? " activated" : "")}
          onClick={onAcceptIfSolved}
        >
          OK
        </span>
      </div>
    );
  }
);

export default Prompt;
