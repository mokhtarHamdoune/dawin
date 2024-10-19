import { ToolsRow } from "./ToolsRow";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { SketchPicker } from "react-color";

import { PaintBucket, Baseline } from "lucide-react";
export function TextColors() {
  const [editor] = useLexicalComposerContext();

  return (
    <>
      <ToolsRow
        tools={[
          {
            icon: Baseline,
            label: "text olor",
            onClick: () => {},
          },
          {
            icon: PaintBucket,
            label: "paint bucket",
            onClick: () => {},
          },
        ]}
      />
      <SketchPicker />
    </>
  );
}
