import { ToolsRow } from './ToolsRow';
import { Plus, Minus } from 'lucide-react';

export function FontSize() {
  return (
    <ToolsRow>
      <div className="flex w-1/4 cursor-pointer items-center justify-center hover:bg-secondary">
        <Minus size={20} />
      </div>
      <div className="flex w-2/4 items-center justify-center">
        <span className="text-lg font-semibold">{18}</span>
      </div>
      <div className="flex w-1/4 cursor-pointer items-center justify-center hover:bg-secondary">
        <Plus size={20} />
      </div>
    </ToolsRow>
  );
}
