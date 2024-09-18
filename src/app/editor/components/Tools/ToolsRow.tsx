import { ReactNode } from 'react';

export type Tool = {
  icon: any;
  label: string;
  onClick: () => void;
};

export type ToolsRowProps = {
  tools?: Tool[];
};

export function ToolsRow({ tools }: ToolsRowProps) {
  return (
    <div className={`flex h-10 w-full divide-x overflow-hidden rounded-lg border border-gray-300`}>
      {tools?.map((tool) => (
        <div
          className="flex flex-1 cursor-pointer items-center justify-center hover:bg-secondary"
          aria-describedby={tool.label}
        >
          {<tool.icon />}
        </div>
      ))}
    </div>
  );
}