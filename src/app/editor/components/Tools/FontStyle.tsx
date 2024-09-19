import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { ToolsRow } from './ToolsRow';
import { Bold, Italic, Underline, Strikethrough } from 'lucide-react';
import { COMMAND_PRIORITY_LOW, FORMAT_TEXT_COMMAND } from 'lexical';
import { useEffect } from 'react';
import { useToolsState } from '../../hooks/useTools';

export function FontStyle() {
  const [editor] = useLexicalComposerContext();
  const { boldState } = useToolsState();

  return (
    <ToolsRow
      tools={[
        {
          icon: Bold,
          label: 'bold',
          onClick: () => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
          },
          isActive: boldState,
        },
        {
          icon: Italic,
          label: 'italic',
          onClick: () => {},
        },
        {
          icon: Underline,
          label: 'underline',
          onClick: () => {},
        },
        {
          icon: Strikethrough,
          label: 'strike through',
          onClick: () => {},
        },
      ]}
    />
  );
}
