import clsx from "clsx";
import { Color, ColorChangeHandler, SketchPicker } from "react-color";
import { Button } from "../ui/button";

type ColorPickerProps = {
  open: boolean;
  color?: Color;
  onChange?: ColorChangeHandler;
  onClose?: () => void;
  onReset?: () => void;
};

const ColorPicker = ({ onClose, onReset, ...props }: ColorPickerProps) => {
  return (
    <div className="relative">
      <div
        className={clsx({
          "absolute left-[4%] top-0 z-20": true,
          hidden: !props.open,
        })}
      >
        <Button variant={"link"} className="absolute -top-1 text-gray-300" onClick={onReset}>
          reset
        </Button>
        <Button
          variant={"link"}
          className="absolute -top-1 right-0 text-slate-400"
          onClick={onClose}
        >
          close
        </Button>
        <SketchPicker
          onChange={props.onChange}
          color={props.color}
          styles={{
            default: {
              picker: {
                paddingTop: 28,
                paddingInline: 18,
              },
            },
          }}
          disableAlpha
        />
      </div>
    </div>
  );
};

export default ColorPicker;
