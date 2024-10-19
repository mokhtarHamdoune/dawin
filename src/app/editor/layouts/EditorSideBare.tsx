type SidebarToolsProps = {
  children: React.ReactNode;
  className?: string;
};
export function EditorSidebar({ children, className }: SidebarToolsProps) {
  return (
    <div className={`rounded-lg border border-gray-200 bg-white p-3 ${className && className}`}>
      {children}
    </div>
  );
}
