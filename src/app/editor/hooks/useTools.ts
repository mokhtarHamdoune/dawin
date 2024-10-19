import { useCallback, useEffect, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
// lexical and its packages
import { $getSelection, $isParagraphNode, $isRangeSelection, ElementFormatType } from "lexical";
import { $getSelectionStyleValueForProperty } from "@lexical/selection";
import { DEFAULT_FONT_SIZE } from "../components/Tools";

export type ToolsStates = {
  boldState: boolean;
  italicState: boolean;
  underlineState: boolean;
  strikethroughState: boolean;
  textAlign: ElementFormatType;
  fontSize: string;
};

export const useToolsState = () => {
  const [editor] = useLexicalComposerContext();
  const [toolsState, setToolsState] = useState<ToolsStates>({
    boldState: false,
    italicState: false,
    underlineState: false,
    strikethroughState: false,
    textAlign: "left",
    fontSize: DEFAULT_FONT_SIZE,
  });

  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      const currentNode = selection.focus.getNode();
      const parentNode = currentNode.getParent();
      let textAlign: ElementFormatType = "left";
      if (parentNode !== null && $isParagraphNode(parentNode)) {
        textAlign = parentNode.getFormatType();
      }
      const fontMatch = $getSelectionStyleValueForProperty(selection, "font-size").match(/\d+/g);
      const fontSize =
        fontMatch !== null && fontMatch.length > 0 ? fontMatch[0] : DEFAULT_FONT_SIZE;
      // Update text format
      setToolsState({
        boldState: selection.hasFormat("bold"),
        italicState: selection.hasFormat("italic"),
        underlineState: selection.hasFormat("underline"),
        strikethroughState: selection.hasFormat("strikethrough"),
        textAlign: textAlign,
        fontSize: fontSize,
      });
    }
  }, []);

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        $updateToolbar();
      });
    });
  }, [editor, $updateToolbar]);

  return toolsState;
};
