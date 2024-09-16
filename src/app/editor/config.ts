import { CreateEditorArgs } from 'lexical';
import path from 'path';
import { EmojiNode } from './nodes';

const editorTheme: CreateEditorArgs['theme'] = {
  ltr: 'ltr',
  rtl: 'rtl',
};

export const editorConfig: Required<
  Pick<CreateEditorArgs, 'namespace' | 'theme' | 'onError' | 'nodes'>
> = {
  namespace: 'Blog Editor',
  theme: editorTheme,
  nodes: [EmojiNode],
  onError: (error: Error) => {
    console.error(error);
  },
};

export const emojiImagesPath = path.resolve(
  __dirname,
  'node_modules/emoji-datasource-facebook/img/facebook/64/',
);
