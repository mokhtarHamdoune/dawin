import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { ToolsRow } from './ToolsRow';
import { Bold, Italic, Underline, Strikethrough } from 'lucide-react';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import { useToolsState } from '../../hooks/useTools';

export function FontStyle() {
  const [editor] = useLexicalComposerContext();
  const { boldState, italicState, underlineState, strikethroughState } = useToolsState();

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
          onClick: () => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
          },
          isActive: italicState,
        },
        {
          icon: Underline,
          label: 'underline',
          onClick: () => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
          },
          isActive: underlineState,
        },
        {
          icon: Strikethrough,
          label: 'strike through',
          onClick: () => {
            editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough');
          },
          isActive: strikethroughState,
        },
      ]}
    />
  );
}
