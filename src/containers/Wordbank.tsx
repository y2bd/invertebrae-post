import React from "react";
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ as dnd } from "react-dnd";
import { StoreContext } from "../Store";
import Keyword, { KeywordDragProps } from "../text/Keyword";
import useActionCreator from "../util/useActionCreator";
import { addToPrompt } from "./Prompt.reducer";
import "./Wordbank.css";
import {
  addToWordbank,
  nextWordbankPage,
  pageCount,
  perPage,
  previousWordbankPage,
  reducerKey,
  removeFromWordbank
} from "./Wordbank.reducer";

// component
interface WordbankProps {
  readonly currentChapter: string;
}

const Wordbank: React.FC<WordbankProps> = React.memo(({ currentChapter }) => {
  // state
  const {
    state: { [reducerKey]: state },
    dispatch
  } = React.useContext(StoreContext);
  const currentPageCount = pageCount(state);

  // dispatchers
  const uselessOnFinish = React.useCallback(() => void 0, []);
  const addWord = useActionCreator(addToWordbank, dispatch);
  const removeWord = useActionCreator(removeFromWordbank, dispatch);
  const prevPage = useActionCreator(previousWordbankPage, dispatch);
  const nextPage = useActionCreator(nextWordbankPage, dispatch);
  const sendToPrompt = useActionCreator(addToPrompt, dispatch);

  // callbacks
  const onSendToPrompt = React.useCallback(
    (word: string) => {
      removeWord(word);
      sendToPrompt({ word, chapterName: currentChapter });
    },
    [removeWord, currentChapter, sendToPrompt]
  );

  // react-dnd
  const [collectionProps, dropRef] = dnd.useDrop<
    KeywordDragProps,
    { target: "wordbank" },
    { hovering: boolean; canDrop: boolean }
  >({
    accept: "keyword",
    canDrop: item => {
      return item.source !== "wordbank";
    },
    collect: monitor => ({
      canDrop: monitor.canDrop(),
      hovering: monitor.isOver()
    }),
    drop: item => {
      addWord(item.id);
      return { target: "wordbank" };
    }
  });

  // render
  return (
    <div
      className={
        "Wordbank" +
        (collectionProps.hovering && collectionProps.canDrop ? " hovering" : "")
      }
      ref={dropRef}
    >
      {state.words
        .slice(perPage * state.page, perPage * state.page + perPage)
        .map(word => (
          <Keyword
            key={word}
            text={word}
            location={"wordbank"}
            onFinish={uselessOnFinish}
            onConsumed={removeWord}
            onDoubleClick={onSendToPrompt}
          />
        ))}
      <div
        className={"Pagination" + (currentPageCount > 1 ? " activated" : "")}
      >
        <span
          className={"Previous" + (state.page > 0 ? " activated" : "")}
          onClick={prevPage}
        >
          {"<"}
        </span>
        <span
          className={
            "Next" + (state.page < currentPageCount - 1 ? " activated" : "")
          }
          onClick={nextPage}
        >
          {">"}
        </span>
      </div>
    </div>
  );
});

export default Wordbank;
