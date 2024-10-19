import { ToolsRow } from "./ToolsRow";
import { Code, Link, Smile } from "lucide-react";

export function EmojiLinkCode() {
  return (
    <ToolsRow
      tools={[
        {
          icon: Smile,
          label: "emojis",
          onClick: () => {},
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
  );
}
