import { ToolsRow } from './ToolsRow';
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';

export function Aligns() {
  return (
    <ToolsRow
      tools={[
        {
          icon: AlignLeft,
          label: 'align left',
          onClick: () => {},
        },
        {
          icon: AlignCenter,
          label: 'align center',
          onClick: () => {},
        },
        {
          icon: AlignRight,
          label: 'align right',
          onClick: () => {},
        },
        {
          icon: AlignJustify,
          label: 'align justify',
          onClick: () => {},
        },
      ]}
    />
  );
}
