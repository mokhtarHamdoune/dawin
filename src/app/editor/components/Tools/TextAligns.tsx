import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useToolsState } from "../../hooks/useTools";
import { ToolsRow } from "./ToolsRow";
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from "lucide-react";
import { FORMAT_ELEMENT_COMMAND } from "lexical";

export function TextAligns() {
  const [editor] = useLexicalComposerContext();
  const { textAlign } = useToolsState();

  return (
    <ToolsRow
      tools={[
        {
          icon: AlignLeft,
          label: "align left",
          onClick: () => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
          },
          isActive: textAlign === "left",
        },
        {
          icon: AlignCenter,
          label: "align center",
          onClick: () => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
          },
          isActive: textAlign === "center",
        },
        {
          icon: AlignRight,
          label: "align right",
          onClick: () => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
          },
          isActive: textAlign === "right",
        },
        {
          icon: AlignJustify,
          label: "align justify",
          onClick: () => {
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify");
          },
          isActive: textAlign === "justify",
        },
      ]}
    />
  );
}
