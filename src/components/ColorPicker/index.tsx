import clsx from "clsx";
import { useEffect, useRef } from "react";
import { Color, ColorChangeHandler, SketchPicker } from "react-color";
import { Button } from "../ui/button";

type ColorPickerProps = {
  open: boolean;
  color?: Color;
  onChange?: ColorChangeHandler;
  onOpenChange?: (open: boolean) => void;
};

// TODO: custom picket wher I can hide the pop over the dom is not usable
const ColorPicker = ({ onOpenChange, ...props }: ColorPickerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOpenChange = (ev: MouseEvent) => {
      if (ref.current && ref.current.contains(ev.target as Node)) {
        onOpenChange && onOpenChange(true);
      } else {
        onOpenChange && onOpenChange(false);
      }
    };

    document.addEventListener("click", handleOpenChange);
    return () => document.removeEventListener("click", handleOpenChange);
  }, [onOpenChange]);

  return (
    <div className="relative">
      <div
        className={clsx({
          "absolute left-[4%] top-0 z-20 border border-slate-100 bg-white p-1": true,
          hidden: !props.open,
        })}
        ref={ref}
      >
        <Button variant={"link"}>rest</Button>
        <SketchPicker onChange={props.onChange} color={props.color} width="220px" disableAlpha />
      </div>
    </div>
  );
};

export default ColorPicker;
