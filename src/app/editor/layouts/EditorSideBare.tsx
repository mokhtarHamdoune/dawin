type SidebarToolsProps = {
  children: React.ReactNode;
};
export function EditorSidebar({ children }: SidebarToolsProps) {
  return (
    <div className="hidden w-1/5 min-w-56 max-w-72 rounded-lg border border-gray-200 bg-white p-3 lg:block">
      {children}
    </div>
  );
}
