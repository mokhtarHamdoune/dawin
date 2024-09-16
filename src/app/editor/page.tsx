'use client';

// lexical react
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
// local
import { EmojiPlugin } from './plugins';
import { editorConfig } from './config';
import { placeholder } from './constants';

function Editor() {
  return (
    <LexicalComposer initialConfig={editorConfig}>
      <div className="p-10">
        <div className="relative p-1">
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="relative h-20 rounded-md border border-secondary p-2"
                aria-placeholder={placeholder}
                placeholder={
                  <span className="absolute left-3 top-3 text-gray-400"> {placeholder}</span>
                }
              />
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <AutoFocusPlugin />
          <EmojiPlugin />
        </div>
      </div>
    </LexicalComposer>
  );
}
export default Editor;
