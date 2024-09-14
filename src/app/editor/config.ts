import { CreateEditorArgs, EditorConfig } from 'lexical';

const editorTheme: CreateEditorArgs['theme'] = {
  ltr: 'ltr',
  rtl: 'rtl',
};

export const editorConfig: Required<Pick<CreateEditorArgs, 'namespace' | 'theme' | 'onError'>> = {
  namespace: 'Blog Editor',
  theme: editorTheme,
  onError: (error: Error) => {
    console.error(error);
  },
};
