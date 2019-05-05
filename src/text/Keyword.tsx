import * as React from "react";
import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ as dnd } from "react-dnd";
import { addToWordbank } from "../containers/Wordbank.reducer";
import { StoreContext } from "../Store";
import useActionCreator from "../util/useActionCreator";
import useTyping from "../util/useTyping";
import "./Keyword.css";
import { Finishable } from "./Text";

interface KeywordProps extends Finishable {
  readonly text: string;
  readonly location: "story" | "puzzle" | "wordbank";
  readonly fast?: boolean;

  readonly onConsumed?: (consumedText: string) => void;
  readonly onDoubleClick?: (word: string) => void;
}

interface KeywordDraggableProps extends KeywordProps {
  readonly renderText: string;
  readonly consumed: boolean;
  readonly setConsumed: (arg: boolean) => void;
}

export interface KeywordDragProps {
  readonly type: "keyword";
  readonly id: string;
  readonly source: "story" | "puzzle" | "wordbank";
}

const Keyword: React.FC<KeywordProps> = React.memo(props => {
  const [renderText] = useTyping(props.text, props.onFinish, props.fast);
  const [consumed, setConsumed] = React.useState(false);

  const { dispatch } = React.useContext(StoreContext);
  const sendToWordbank = useActionCreator(addToWordbank, dispatch);

  const onSendnToWordbank = React.useCallback(
    (word: string) => {
      sendToWordbank(word);
      setConsumed(true);
    },
    [sendToWordbank, setConsumed]
  );

  return (
    <KeywordDraggable
      {...props}
      // react-dnd-hooks don't really work yet
      // this makes them update according to props...
      key={props.text + consumed}
      consumed={consumed}
      setConsumed={setConsumed}
      renderText={renderText}
      onDoubleClick={
        props.location === "story" ? onSendnToWordbank : props.onDoubleClick
      }
    />
  );
});

// useDrag won't update canDrag via state, so we need a child component to cause update via props
const KeywordDraggable: React.FC<KeywordDraggableProps> = React.memo(props => {
  const [_, dragRef] = dnd.useDrag({
    item: {
      type: "keyword",
      id: props.text,
      source: props.location
    } as KeywordDragProps,
    canDrag: !props.consumed,
    end: (_, monitor) => {
      if (monitor.didDrop()) {
        props.setConsumed(true);
        if (props.onConsumed) {
          props.onConsumed(props.text);
        }
      }
    }
  });

  const onDoubleClick = React.useCallback(
    () =>
      !props.consumed && props.onDoubleClick && props.onDoubleClick(props.text),
    [props.consumed, props.onDoubleClick, props.text]
  );

  return (
    <span
      className={
        "Keyword" +
        (props.consumed ? " consumed" : "") +
        (props.location === "story" ? " story" : "")
      }
      ref={dragRef}
      onDoubleClick={onDoubleClick}
    >
      {props.renderText}
    </span>
  );
});

export default Keyword;
