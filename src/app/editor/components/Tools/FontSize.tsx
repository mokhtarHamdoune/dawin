import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { useToolsState } from '../../hooks/useTools';
import { ToolsBtn, ToolsRow } from './ToolsRow';
import { Plus, Minus } from 'lucide-react';
import { $getSelection } from 'lexical';
import { $patchStyleText } from '@lexical/selection';
import { Select, SelectItem, SelectContent } from '@/components/ui/select';
import { SelectTrigger, SelectValue } from '@radix-ui/react-select';
export const DEFAULT_FONT_SIZE = '14';
// TODO: when you select a paragraph the and size is not correct the input should be empty

export const FONT_SIZES = [8, 9, 10, 11, 12, 13, 14, 18, 24, 30, 36, 48, 60, 72, 96];

export function FontSize() {
  const { fontSize } = useToolsState();
  const [editor] = useLexicalComposerContext();

  const handleBtnClick = (newFontSize: number) => {
    updteFonsize(String(newFontSize));
  };

  const handleSelectChange = (value: string) => {
    updteFonsize(value);
  };

  const updteFonsize = (newFontSize: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if (selection !== null) {
        $patchStyleText(selection, {
          'font-size': newFontSize + 'px',
        });
      }
    });
  };

  return (
    <ToolsRow>
      <ToolsBtn
        onClick={(e) => {
          e.stopPropagation();
          handleBtnClick(Number(fontSize) - 1);
        }}
      >
        <Minus size={20} />
      </ToolsBtn>
      <div className="flex w-2/4 items-center justify-center">
        <Select value={fontSize} onValueChange={handleSelectChange}>
          <SelectTrigger className="h-full w-full rounded-lg border border-gray-200">
            <SelectValue>{fontSize}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {FONT_SIZES.map((value) => (
              <SelectItem value={String(value)} key={value}>
                {value}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <ToolsBtn
        onClick={(e) => {
          e.stopPropagation();
          handleBtnClick(Number(fontSize) + 1);
        }}
      >
        <Plus size={20} />
      </ToolsBtn>
    </ToolsRow>
  );
}
