import { EditorSidebar } from '../layouts';
import {
  FontStyle,
  Aligns,
  TextAndBgColors,
  FontSize,
  FontFamily,
  BlocType,
  EmojiLinkCode,
} from './Tools';

export function ToolsSidebar() {
  return (
    <EditorSidebar>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Text</h4>
      <div className="flex flex-col gap-y-3">
        <FontFamily />
        <BlocType />
        <FontSize />
        <FontStyle />
        <Aligns />
        <TextAndBgColors />
        <EmojiLinkCode />
      </div>
      <h4 className="mt-2 scroll-m-20 text-xl font-semibold tracking-tight">Contributors</h4>
    </EditorSidebar>
  );
}
