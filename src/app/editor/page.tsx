'use client';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { editorConfig } from './config';
import { placeholder } from './constants';
import { EmojiPlugin } from './plugins';
import { EditorSidebar, EditorWrapper } from './layouts';
import { ToolsSidebar } from './components/ToolsSideBar';
import ImageWrapper from './layouts/ImageWrapper';
function Editor() {
  return (
    <div className="flex flex-grow overflow-auto border-t border-gray-300 bg-gray-100 p-4">
      <EditorSidebar>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Plugins</h4>
      </EditorSidebar>
      <EditorWrapper>
        <ImageWrapper />
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
      <ToolsSidebar />
    </div>
  );
}

export default Editor;
