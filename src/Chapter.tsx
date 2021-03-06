import * as React from "react";
import { Chapter as ChapterData } from "./Story";
import { Finishable } from "./text/Text";
import Phrase from "./text/Phrase";
import Keyword from "./text/Keyword";
import Paragraph from "./text/Paragraph";

interface ChapterProps {
  readonly chapter: ChapterData;

  readonly onNavigate: (chapterName: string) => void;
}

const phrase = (text: string, fast?: boolean) => (props: Finishable) => (
  <Phrase text={text} fast={fast} onFinish={props.onFinish} />
);

const keyword = (text: string, fast?: boolean) => (props: Finishable) => (
  <Keyword
    text={text}
    fast={fast}
    location={"story"}
    onFinish={props.onFinish}
  />
);

const paragraph = (
  texts: Array<React.ComponentType<Finishable>>,
  key: string | number,
  fast?: boolean
) => (props: Finishable) => (
  <Paragraph texts={texts} fast={fast} onFinish={props.onFinish} />
);

const Chapter: React.FC<ChapterProps> = React.memo(
  ({ chapter, onNavigate, children }) => {
    const noop = React.useCallback(() => void 0, []);

    const processedStory = React.useMemo(() => {
      const body = chapter.body.flatMap((line, idx) => {
        // split to get the keywords in [brackets]
        // all odd numbered indexes will be keywords
        // means that brackets are not allowed in the story
        const phrases = line.split(/[\[\]]/).map((text, i) => {
          return (i % 2 === 1 ? keyword : phrase)(text, chapter.fast);
        });

        return chapter.fast ? phrases : [paragraph(phrases, idx, chapter.fast)];
      });

      return paragraph(body, chapter.name, chapter.fast)({ onFinish: noop });
    }, [chapter, noop]);

    return (
      <>
        {processedStory}
        {children}
      </>
    );
  }
);

export default Chapter;
