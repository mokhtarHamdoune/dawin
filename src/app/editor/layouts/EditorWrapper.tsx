type EditorWrapperProps = {
  children: React.ReactNode;
};

export function EditorWrapper({ children }: EditorWrapperProps) {
  return <div className="flex-1 px-4">{children}</div>;
}
