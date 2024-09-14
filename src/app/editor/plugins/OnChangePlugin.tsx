import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { EditorState } from 'lexical';
import { useEffect } from 'react';

type OnChangePluginProps = {
  onChange: (state: EditorState) => void;
};

export const OnChangePlugin = ({ onChange }: OnChangePluginProps) => {
  const [editor] = useLexicalComposerContext();
  editor.registerUpdateListener(({ editorState }) => {});

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      onChange(editorState);
    });
  }, [onChange]);

  return null;
};
