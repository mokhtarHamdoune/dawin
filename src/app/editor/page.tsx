'use client';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { editorConfig } from './config';
import { placeholder } from './constants';
import { EmojiPlugin } from './plugins';
import { SidebarTools, EditorWrapper } from './layouts';
import { FontStyleRow, AlignsRow, TextAndBgColorsRow } from './components/Tools';

function Editor() {
  return (
    <div className="flex flex-grow overflow-auto border-t border-gray-300 bg-gray-100 p-4">
      <SidebarTools>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Plugins</h4>
      </SidebarTools>
      <EditorWrapper>
        <LexicalComposer initialConfig={editorConfig}>
          <div className="p-10">
            <div className="relative p-1">
              <RichTextPlugin
                contentEditable={
                  <ContentEditable
                    className="relative h-20 bg-white"
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
      </EditorWrapper>
      <SidebarTools>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Text</h4>
        <FontStyleRow />
        <AlignsRow />
        <TextAndBgColorsRow />
      </SidebarTools>
    </div>
  );
}

export default Editor;
