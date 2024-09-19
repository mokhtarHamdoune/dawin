import { ReactNode } from 'react';

export type Tool = {
  icon: any;
  label: string;
  onClick: () => void;
};

export type ToolsRowProps = {
  tools?: Tool[];
  /**
   * if you want to fully customize the content
   */
  children?: ReactNode;
};

export function ToolsRow({ tools, children }: ToolsRowProps) {
  return (
    <div className="flex h-10 w-full divide-x overflow-hidden rounded-lg border border-gray-200">
      {children === undefined &&
        tools?.map((tool) => (
          <div
            className="flex flex-1 cursor-pointer items-center justify-center hover:bg-secondary"
            aria-describedby={tool.label}
            key={tool.label}
          >
            {<tool.icon />}
          </div>
        ))}
      {children}
    </div>
  );
}
