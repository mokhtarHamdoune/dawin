import { SelectValue } from '@radix-ui/react-select';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
export function FontFamily() {
  return (
    <Select>
      <SelectTrigger className="h-10 rounded-lg border border-gray-300">
        <SelectValue placeholder="font" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Arial">Arial</SelectItem>
        <SelectItem value="Open Sans">Open Sans</SelectItem>
      </SelectContent>
    </Select>
  );
}
