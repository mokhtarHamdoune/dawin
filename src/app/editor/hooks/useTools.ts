import { useCallback, useEffect, useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $getSelection, $isRangeSelection } from 'lexical';

export const useToolsState = () => {
  const [editor] = useLexicalComposerContext();
  const [toolsState, setToolsState] = useState({
    boldState: false,
  });
  const $updateToolbar = useCallback(() => {
    const selection = $getSelection();
    if ($isRangeSelection(selection)) {
      // Update text format
      //   setIsItalic(selection.hasFormat('italic'));
      //   setIsUnderline(selection.hasFormat('underline'));
      //   setIsStrikethrough(selection.hasFormat('strikethrough'));
      setToolsState({
        boldState: selection.hasFormat('bold'),
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
