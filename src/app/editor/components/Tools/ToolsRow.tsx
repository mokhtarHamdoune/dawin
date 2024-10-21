import { Button, ButtonProps } from "@/components/ui/button";
import clsx from "clsx";
import { LucideIcon } from "lucide-react";
import { MouseEventHandler, ReactNode } from "react";

export type Tool = {
  icon: LucideIcon;
  label: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isActive?: boolean;
};

export type ToolsRowProps = {
  tools?: Tool[];
  /**
   * if you want to fully customize the content
   */
  children?: ReactNode;
};

export type ToolsBtnProps = ButtonProps & { isActive?: boolean };

export function ToolsBtn({ children, isActive, ...rest }: ToolsBtnProps) {
  return (
    <Button
      className={clsx({
        "flex flex-1 cursor-pointer items-center justify-center bg-white text-black hover:text-white":
          true,
        "bg-primary text-white": isActive === true,
      })}
      {...rest}
    >
      {children}
    </Button>
  );
}

export function ToolsRow({ tools, children }: ToolsRowProps) {
  return (
    <div className="flex h-10 w-full gap-x-2 overflow-hidden rounded-lg p-0.5">
      {children === undefined &&
        tools?.map((tool) => (
          <ToolsBtn
            aria-describedby={tool.label}
            key={tool.label}
            onClick={tool.onClick}
            isActive={tool.isActive}
          >
            {<tool.icon size={20} />}
          </ToolsBtn>
        ))}
      {children}
    </div>
  );
}
