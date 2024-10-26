import { ToolsBtn, ToolsRow } from "./ToolsRow";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { ColorChangeHandler } from "react-color";

import { PaintBucket, BaselineIcon } from "lucide-react";
import { useCallback, useState } from "react";
import { useToolsState } from "../../hooks/useTools";
import { $getSelection } from "lexical";
import { $patchStyleText } from "@lexical/selection";
import ColorPicker from "@/components/ColorPicker";
import { DEFAULT_BG_COLOR, DEFAULT_COLOR } from "../../constants";

type Picker = {
  type: "text" | "bg";
  visible: boolean;
};

export function TextColors() {
  const [editor] = useLexicalComposerContext();
  const { textColor, bgColor } = useToolsState();
  const [picker, setColorsVisible] = useState<Picker>({
    type: "text",
    visible: false,
  });

  const handleColorBtnClick = (type: Picker["type"]) => {
    setColorsVisible({ type: type, visible: true });
  };

  const handleColorChange: ColorChangeHandler = useCallback(
    (color) => {
      editor.update(() => {
        const selection = $getSelection();
        if (selection) {
          if (picker.type === "text") {
            $patchStyleText(selection, {
              color: color.hex,
            });
          }
          if (picker.type === "bg") {
            $patchStyleText(selection, {
              "background-color": color.hex,
            });
          }
        }
      });

      setColorsVisible((prev) => ({ ...prev, visible: false }));
    },
    [editor, picker.type],
  );

  const handleResetColor = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      if (selection) {
        if (picker.type === "text") {
          $patchStyleText(selection, {
            color: DEFAULT_COLOR,
          });
        }
        if (picker.type === "bg") {
          $patchStyleText(selection, {
            "background-color": DEFAULT_BG_COLOR,
          });
        }
      }
    });

    setColorsVisible((prev) => ({ ...prev, visible: false }));
  }, [editor, picker.type]);

  const handleColorPickerClose = () => {
    setColorsVisible((prev) => ({ ...prev, visible: false }));
  };

  return (
    <>
      <ToolsRow>
        <ToolsBtn
          aria-describedby={"text color"}
          onClick={() => handleColorBtnClick("text")}
          isActive={picker.visible && picker.type === "text"}
        >
          <div className="flex w-full flex-col items-center">
            <BaselineIcon size={20} />
            <div
              className={`h-1 w-full`}
              style={{
                backgroundColor: textColor || DEFAULT_COLOR,
              }}
            />
          </div>
        </ToolsBtn>
        <ToolsBtn
          aria-describedby={"background color"}
          onClick={() => handleColorBtnClick("bg")}
          isActive={picker.visible && picker.type === "bg"}
        >
          <div className="flex w-full flex-col items-center">
            <PaintBucket size={20} />
            <div
              className={`h-1 w-full`}
              style={{
                backgroundColor: bgColor || DEFAULT_BG_COLOR,
              }}
            />
          </div>
        </ToolsBtn>
      </ToolsRow>
      <ColorPicker
        color={picker.type === "text" ? textColor : bgColor}
        open={picker.visible}
        onChange={handleColorChange}
        onClose={handleColorPickerClose}
        onReset={handleResetColor}
      />
    </>
  );
}
