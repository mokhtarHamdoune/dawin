import { EditorSidebar } from '../layouts';
import Contributor from './Contributor';
import {
  FontStyle,
  TextAligns,
  TextAndBgColors,
  FontSize,
  FontFamily,
  BlocType,
  EmojiLinkCode,
} from './Tools';

export function ToolsSidebar() {
  return (
    <EditorSidebar>
      <h4 className="mb-2 scroll-m-20 text-xl font-semibold tracking-tight">Text</h4>
      <div className="flex flex-col gap-y-3">
        <FontFamily />
        <BlocType />
        <FontSize />
        <FontStyle />
        <TextAligns />
        <TextAndBgColors />
        <EmojiLinkCode />
      </div>
      <h4 className="my-2 scroll-m-20 text-xl font-semibold tracking-tight">Contributors</h4>
      <div className="flex flex-col gap-y-1">
        <Contributor first_name="Mokhtar" last_name="Hamdoune" />
        <Contributor first_name="Mohammed" last_name="Berhab" />
        <Contributor first_name="Yasser" last_name="Bouchareb" />
      </div>
    </EditorSidebar>
  );
}
