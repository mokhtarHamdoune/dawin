type EditorWrapperProps = {
  children: React.ReactNode;
};

export function EditorWrapper({ children }: EditorWrapperProps) {
  return <div className="flex flex-1 flex-col px-4">{children}</div>;
}
