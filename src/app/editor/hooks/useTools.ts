import { useCallback, useEffect, useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $getSelection,
  $isElementNode,
  $isRangeSelection,
  ElementFormatType,
  ParagraphNode,
} from 'lexical';
export type ToolsStates = {
  boldState: boolean;
  italicState: boolean;
  underlineState: boolean;
  strikethroughState: boolean;
  textAlign: ElementFormatType;
};

export const useToolsState = () => {
  const [editor] = useLexicalComposerContext();
  const [toolsState, setToolsState] = useState<ToolsStates>({
    boldState: false,
    italicState: false,
    underlineState: false,
    strikethroughState: false,
    textAlign: 'left',
  });
  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      const parentNode = selection.focus.getNode().getParent();
      let textAlign: ElementFormatType = 'left';
      if (parentNode !== null) {
        textAlign = parentNode.getFormatType();
      }
      // Update text format
      setToolsState({
        boldState: selection.hasFormat('bold'),
        italicState: selection.hasFormat('italic'),
        underlineState: selection.hasFormat('underline'),
        strikethroughState: selection.hasFormat('strikethrough'),
        textAlign: textAlign,
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
