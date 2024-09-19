import { useCallback, useEffect, useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection } from 'lexical';
export type ToolsStates = {
  boldState: boolean;
  italicState: boolean;
  underlineState: boolean;
  strikethroughState: boolean;
};

export const useToolsState = () => {
  const [editor] = useLexicalComposerContext();
  const [toolsState, setToolsState] = useState<ToolsStates>({
    boldState: false,
    italicState: false,
    underlineState: false,
    strikethroughState: false,
  });
  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Update text format
      setToolsState({
        boldState: selection.hasFormat('bold'),
        italicState: selection.hasFormat('italic'),
        underlineState: selection.hasFormat('underline'),
        strikethroughState: selection.hasFormat('strikethrough'),
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
