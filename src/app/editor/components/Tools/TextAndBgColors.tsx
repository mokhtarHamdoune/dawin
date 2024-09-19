import { ToolsRow } from './ToolsRow';

import { PaintBucket, Baseline } from 'lucide-react';
export function TextAndBgColors() {
  return (
    <ToolsRow
      tools={[
        {
          icon: Baseline,
          label: 'text olor',
          onClick: () => {},
        },
        {
          icon: PaintBucket,
          label: 'paint bucket',
          onClick: () => {},
        },
      ]}
    />
  );
}
