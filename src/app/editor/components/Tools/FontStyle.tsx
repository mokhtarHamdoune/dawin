import { ToolsRow } from './ToolsRow';
import { Bold, Italic, Underline, Strikethrough } from 'lucide-react';

export function FontStyle() {
  return (
    <ToolsRow
      tools={[
        {
          icon: Bold,
          label: 'bold',
          onClick: () => {},
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
