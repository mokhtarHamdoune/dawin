import { useCallback, useEffect, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
// lexical and its packages
import { $getSelection, $isParagraphNode, $isRangeSelection, ElementFormatType } from "lexical";
import { $getSelectionStyleValueForProperty } from "@lexical/selection";
import { DEFAULT_BG_COLOR, DEFAULT_COLOR, DEFAULT_FONT_SIZE } from "../constants";

export type ToolsStates = {
  boldState: boolean;
  italicState: boolean;
  underlineState: boolean;
  strikethroughState: boolean;
  textAlign: ElementFormatType;
  fontSize: string;
  textColor: string;
  bgColor: string;
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
    textColor: DEFAULT_COLOR,
    bgColor: DEFAULT_BG_COLOR,
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
      const textColor = $getSelectionStyleValueForProperty(selection, "color");
      const bgColor = $getSelectionStyleValueForProperty(selection, "background-color");
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
        textColor,
        bgColor,
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
