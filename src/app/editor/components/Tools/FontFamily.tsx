import { SelectValue } from '@radix-ui/react-select';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { ToolsRow } from './ToolsRow';
export function FontFamily() {
  return (
    <ToolsRow>
      <Select>
        <SelectTrigger className="h-full border border-gray-100 shadow-sm">
          <SelectValue placeholder="font" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Arial">Arial</SelectItem>
          <SelectItem value="Open Sans">Open Sans</SelectItem>
        </SelectContent>
      </Select>
    </ToolsRow>
  );
}
