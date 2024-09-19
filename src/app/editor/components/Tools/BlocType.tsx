import { SelectValue } from '@radix-ui/react-select';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select';
export function BlocType() {
  return (
    <Select>
      <SelectTrigger className="h-10 rounded-lg border border-gray-300">
        <SelectValue placeholder="Normal" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="h1">H1</SelectItem>
        <SelectItem value="h2">H2</SelectItem>
      </SelectContent>
    </Select>
  );
}
