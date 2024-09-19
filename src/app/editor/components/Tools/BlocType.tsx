import { SelectValue } from '@radix-ui/react-select';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
import { ToolsRow } from './ToolsRow';
export function BlocType() {
  return (
    <ToolsRow>
      <Select>
        <SelectTrigger className="h-full rounded-lg border-none">
          <SelectValue placeholder="Normal" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="h1">H1</SelectItem>
          <SelectItem value="h2">H2</SelectItem>
        </SelectContent>
      </Select>
    </ToolsRow>
  );
}
