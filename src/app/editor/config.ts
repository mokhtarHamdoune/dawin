import { CreateEditorArgs } from 'lexical';
import path from 'path';
import { EmojiNode } from './nodes';
import { InitialConfigType } from '@lexical/react/LexicalComposer';

const editorTheme: CreateEditorArgs['theme'] = {
  ltr: 'ltr',
  rtl: 'rtl',
  text: {
    bold: 'editor-text-bold',
    italic: 'editor-text-italic',
    strikethrough: 'editor-text-strikethrough',
    underline: 'editor-text-underline',
    underlineStrikethrough: 'editor-text-underlineStrikethrough',
  },
};

export const editorConfig: InitialConfigType = {
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
