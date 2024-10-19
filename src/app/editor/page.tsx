"use client";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { editorConfig } from "./config";
import { placeholder } from "./constants";
import { EmojiPlugin } from "./plugins";
import { EditorSidebar, EditorWrapper } from "./layouts";
import { ToolsSidebar } from "./components/ToolsSideBar";
import ImageWrapper from "./layouts/ImageWrapper";
// style of the editor
import "./style.css";

function Editor() {
  return (
    <div className="flex w-full flex-grow justify-center overflow-auto border-t border-gray-300 bg-gray-100 p-4">
      <div className="flex w-full max-w-[1500px]">
        <EditorSidebar className="hidden min-w-56 max-w-72 xl:block xl:w-1/5">
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Plugins</h4>
        </EditorSidebar>
        <LexicalComposer initialConfig={editorConfig}>
          <EditorWrapper>
            <ImageWrapper />
            <div className="relative mt-4 flex-1 rounded-lg border border-gray-200 bg-white">
              <RichTextPlugin
                contentEditable={
                  <ContentEditable
                    className="h-full p-4 focus:outline-none"
                    aria-placeholder={placeholder}
                    placeholder={
                      <span className="absolute left-4 top-4 text-gray-400"> {placeholder}</span>
                    }
                  />
                }
                ErrorBoundary={LexicalErrorBoundary}
              />
              <AutoFocusPlugin defaultSelection="rootEnd" />
              <EmojiPlugin />
            </div>
          </EditorWrapper>
          <ToolsSidebar />
        </LexicalComposer>
      </div>
    </div>
  );
}

export default Editor;
