import EmojiPicker from "@/components/EmojiPicker";
import { ToolsRow } from "./ToolsRow";
import { Code, Link, Smile } from "lucide-react";
import { useCallback, useState } from "react";
import { MouseDownEvent } from "emoji-picker-react/dist/config/config";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createTextNode, $getSelection, $isRangeSelection } from "lexical";

export function EmojiLinkCode() {
  const [isEmojiOpens, setIsEmojiOpen] = useState<boolean>(false);
  const [editor] = useLexicalComposerContext();

  const handleEmojiClick: MouseDownEvent = useCallback(
    (e) => {
      setIsEmojiOpen(false);
      editor.update(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          const emojiNode = $createTextNode(e.emoji);
          // fill current selection with an array with one item which the emoji
          selection.insertNodes([emojiNode]);
        }
      });
    },
    [editor],
  );

  return (
    <>
      <ToolsRow
        tools={[
          {
            icon: Smile,
            label: "emojis",
            onClick: () => setIsEmojiOpen(true),
          },
          {
            icon: Link,
            label: "link",
            onClick: () => {},
          },
          {
            icon: Code,
            label: "code",
            onClick: () => {},
          },
        ]}
      />
      <EmojiPicker open={isEmojiOpens} onEmojiClick={handleEmojiClick} />
    </>
  );
}
